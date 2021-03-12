import {Component, HostListener, OnInit} from '@angular/core';
import { GlobalConstants } from "../../../common/global-constants";
import { ExperienceProService } from "../../../services/experiencePro/experience-pro.service";
import * as _ from 'underscore';
import moment from 'moment';
import { trigger, state, style, transition, animate } from '@angular/animations'

A@Component({
    selector    : 'app-experience-view',
    templateUrl : './experience-view.component.html',
    styleUrls   : ['./experience-view.component.less'],
    animations  : [
        trigger('selection', [
            state('select', style({
                opacity: 1
            })),
            state('no-select', style({
                opacity: 0.5
            })),
            transition('no-select => select', [
                animate('1s')
            ]),
            transition('no-select => no-select', [
                animate('1s')
            ])
        ])
    ]
})
export class ExperienceViewComponent implements OnInit {
    Locale;
    experiencePro           : any;
    experienceProTimeline   : any;
    experienceProGraph      : any;
    modeGraph               : boolean = false;
    modeTimeline            : boolean = false;
    loading                 : boolean = true;
    screen;
    elementsToShow;

    @HostListener('window:load', ['$event'])
    onLoad(event) {
        this.elementsToShow = document.querySelectorAll('.show-on-scroll');
        this.showDivVisible();
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
        this.showDivVisible();
    }

    constructor(private experienceProService: ExperienceProService) {
        this.Locale = GlobalConstants.locale();
        this.experienceProService = experienceProService;
        this.screen = screen;
        this.elementsToShow = [];
    }

    ngOnInit(): void {
        let mode = localStorage.getItem('experience-mode');
        if (!mode) {
            localStorage.setItem('experience-mode', 'timeline');
        }
        if(mode === 'timeline') {
            this.modeTimeline = true;
        } else {
            this.modeGraph = true;
        }
        this.experienceProService
            .getAllExperiencePro()
            .subscribe((res) => {
                this.experiencePro = res.experiencePro;
                this.experiencePro.forEach(experience => {
                    if (experience.companyId.hasOwnProperty('logo')) {
                        experience.companyId.logo = GlobalConstants.getCompletePath(experience.companyId.logo);
                    }
                })
                if (this.modeTimeline) {
                    this.getModeTimeline();
                } else {
                    this.getModeGraph();
                }
                this.loading = false;
        }, (error) => {
                console.error('error' + error.message);
            });
        window.onresize = () => { this.screen = screen; };
    }

    private getModeGraph() : void {
        this.experienceProGraph = [];
        let maxTime = 0;
        this.experiencePro.forEach(exp => {
            let elem = this.experienceProGraph.find(expGraph => expGraph.typeJob === exp.typeJob);
            let endDate = exp.endDate ? exp.endDate : moment();
            if (elem) {
                elem.time += moment(endDate).diff(exp.startDate, 'days');
                if (maxTime < elem.time) {
                    maxTime = elem.time;
                }
            } else {
                this.experienceProGraph.push({
                    title           :   exp.title,
                    description     :   exp.description,
                    companyId       :   exp.companyId,
                    typeJob         :   exp.typeJob,
                    time            :   moment(endDate).diff(exp.startDate, 'days')
                });
                if (maxTime < exp.time) {
                    maxTime = exp.time;
                }
            }
        });
        this.experienceProGraph.forEach(exp => {
            let startDate   = moment('1970-01-01');
            let endDate     = startDate.clone().add(exp.time, 'd');
            exp.pourcent = (exp.time / maxTime * 100).toFixed(2);
            exp.fullDate = this.strDiffDate(new Date(startDate.format('YYYY-MM-DD')), new Date(endDate.format('YYYY-MM-DD')));
            let nbYears = endDate.diff(startDate, 'year'),
                nbMonth = endDate.diff(startDate, 'month') % 12,
                nbDays  = endDate.diff(startDate, 'days') % 30;
            exp.exactDate = '';
            if (nbYears > 0) {
                exp.exactDate = nbYears + ' ' + (nbYears > 1 ? this.Locale.year : this.Locale.years) + ', ';
            }
            if (nbMonth > 0) {
                exp.exactDate += nbMonth + ' ' + (nbMonth > 1 ? this.Locale.month : this.Locale.months) + ', ';
            }
            if (nbDays > 0) {
                exp.exactDate += nbDays + ' ' + this.Locale.days;
            }
        });
        this.experienceProGraph = _.sortBy(this.experienceProGraph, exp => { return exp.time }).reverse();
    }

    private getModeTimeline() : void {
        this.experienceProTimeline = _.sortBy(this.experiencePro, (experience) =>  {
            experience.fullDate = this.getFullDate(experience.startDate, experience.endDate);
            return experience.startDate.dateTime;
        }).reverse();
    }

    public selectChoice(choice: string) : void {
        if (choice == 'timeline') {
            this.modeGraph      = false;
            this.modeTimeline   = true;
            if (this.experienceProTimeline == null) {
                this.getModeTimeline();
            }
            localStorage.setItem('experience-mode', 'timeline');
        } else {
            this.modeGraph      = true;
            this.modeTimeline   = false;
            if (this.experienceProGraph == null) {
                this.getModeGraph();
            }
            localStorage.setItem('experience-mode', 'graph');
        }
    }

    public getColor(type: String) : string {
        switch (type) {
            case 'Agriculture':
                return 'agricol';
                break;
            case 'Programmation':
                return 'prog'
                break;
            case 'Concessionnaire':
                return 'concession';
                break;
            case 'Métallurgie':
                return 'usine';
                break;
            default:
                return ''
                break;
        }
    }

    private getFullDate(startDate: Date, endDate: Date): string {
        if (endDate == null) {
            let word = GlobalConstants.shortLocale == 'fr' ? ' le ' : ' ';
            return this.Locale.Since + word + moment(startDate).locale(GlobalConstants.shortLocale).format('d MMMM YYYY');
        } else {
            if (moment(startDate).format('MMYYYY') == moment(endDate).format('MMYYYY')) {
                if (GlobalConstants.shortLocale == 'fr') {
                    //format: 7 au 9 novembre 2019 (2 jours)
                    return 'Du '
                        +   moment(startDate).date()
                        +   ' au '
                        +   moment(endDate).date()
                        +   ' '
                        +   moment(startDate).locale(GlobalConstants.shortLocale).format('MMMM YYYY')
                        +   ' ('
                        +   this.strDiffDate(startDate, endDate)
                        +   ')';
                } else {
                    //format: November 7 to 9, 2019
                    return 'From ' +
                        moment(startDate).locale(GlobalConstants.shortLocale).format('MMMM')
                        + ' '
                        + moment(startDate).date()
                        + ' to '
                        + moment(endDate).date()
                        + ', '
                        + moment(startDate).format('YYYY')
                        +   ' ('
                        +   this.strDiffDate(startDate, endDate)
                        +   ')';
                }
            } else {
                let duration = moment(endDate).diff(moment(startDate), 'month');
                if (moment(startDate).year() == moment(endDate).year()) {
                    //format: Mai-Juillet 2020 (3 mois)
                    return this.capitalizeFirstLetter(moment(startDate).locale(GlobalConstants.shortLocale).format('MMMM'))
                        +   ' - '
                        +   this.capitalizeFirstLetter(moment(endDate).locale(GlobalConstants.shortLocale).format('MMMM'))
                        +   ' '
                        +   moment(startDate).year()
                        +   ' ('
                        +   this.strDiffDate(startDate, endDate)
                        +   ')';
                } else {
                    //format: Janvier 2020 - Fevrier 2021 (13 mois)
                    return this.capitalizeFirstLetter(moment(startDate).locale(GlobalConstants.shortLocale).format('MMMM YYYY'))
                        +   ' - '
                        +   this.capitalizeFirstLetter(moment(endDate).locale(GlobalConstants.shortLocale).format('MMMM YYYY'))
                        +   ' ('
                        +   this.strDiffDate(startDate, endDate)
                        +   ')';
                }
            }
        }
    }

    private capitalizeFirstLetter(s : string) : string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    private strDiffDate(startDate: Date, endDate: Date) : string {
        let strDate;
        let nbYears = moment(endDate).diff(moment(startDate), 'year');
        let nbMonth = moment(endDate).diff(moment(startDate), 'month') % 12;
        let nbDays = moment(endDate).diff(moment(startDate), 'day') % 30;
        if (nbYears > 0) {
            strDate = nbYears + ' ' + (nbYears > 1 ? this.Locale.years : this.Locale.year);
            if (nbMonth > 0){
                return strDate.concat(' ' + nbMonth + ' ' + (nbMonth > 1 ? this.Locale.months : this.Locale.month));
            }
        } else {
            let noDays = false;
            if (nbDays > 15 && nbDays < 22) {
                noDays = true;
                nbMonth += 0.5
            } else if(nbDays >= 22) {
                noDays = true;
                nbMonth += 1
            }
            if (noDays) {
                if (nbMonth < 1) {
                    let nbWeek = Math.ceil(nbDays / 7);
                    return nbWeek + ' ' + (nbWeek > 1 ? this.Locale.weeks : this.Locale.week);
                } else {
                    return nbMonth + ' ' + (nbMonth > 1 ? this.Locale.months : this.Locale.month);
                }
            } else {
                if (nbMonth < 1) {
                    let nbWeek = Math.ceil(nbDays / 7);
                    if (nbWeek >= 4) {
                        return '1 ' + this.Locale.week;
                    } else {
                        return nbWeek + ' ' + (nbWeek > 1 ? this.Locale.weeks : this.Locale.week);
                    }
                } else {
                    return nbMonth + ' ' + (nbMonth > 1 ? this.Locale.months : this.Locale.month);
                }
            }
        }

    }

    private isElementInViewport(el): Boolean {
        const rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0 && rect.bottom >= 0)
            || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }

    private showDivVisible(): void {
        this.elementsToShow.forEach((element) => {
            if (this.isElementInViewport(element) && !element.classList.contains("is-load")) {
                element.classList.add('is-load');
            }
        });
    }
}
