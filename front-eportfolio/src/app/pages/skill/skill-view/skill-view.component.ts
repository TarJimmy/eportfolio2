import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../../common/global-constants";
import { SkillService } from "../../../services/skill/skill.service";
import * as _ from 'underscore';
@Component({
    selector: 'app-skill-view',
    templateUrl: './skill-view.component.html',
    styleUrls: ['./skill-view.component.less']
})
export class SkillViewComponent implements OnInit {
    Locale;
    frontEnd    :   Array<any> = [];
    backEnd     :   Array<any> = [];
    sqls         :   Array<any> = [];
    logiciels   :   Array<any> = [];
    others      :   Array<any> = [];
    languages   :   Array<any> = [];
    frameworks  :   Array<any> = [];
    constructor(private skillService: SkillService) {
        this.Locale = GlobalConstants.locale();
        this.skillService = skillService;
    }

    ngOnInit(): void {
        this.skillService
            .getAllSkills()
            .subscribe((res) => {
                this.languages  = res.languages;
                this.frameworks = res.frameworks;
                this.others     = _.each(res.skills, skill => { skill.image = GlobalConstants.getCompletePath(skill.image); });
                console.log(this.others)
                this.languages.forEach((language) => {
                    language.image = GlobalConstants.getCompletePath(language.image);
                    this.movObjectByType(language);
                });
                this.frameworks.forEach((framework) => {
                    framework.image = GlobalConstants.getCompletePath(framework.image);
                    this.movObjectByType(framework);
                });
            })
    }

    private movObjectByType(obj: any) : void {
        console.log(obj.type[0])
        switch (obj.type[0]) {
            case 'web' :
                if (obj.type[1] === 'front-end') {
                    this.frontEnd.push(obj);
                } else {
                    if (obj.type[1] === 'SQL') {
                        this.sqls.push(obj);
                    }
                    this.backEnd.push(obj);
                }
                break;
            case 'logiciel' :
                this.logiciels.push(obj);
                break;
            case 'SQL':
                this.sqls.push(obj);
                break;
            default:
                this.others.push(obj);
                break;
        }
    }
}
