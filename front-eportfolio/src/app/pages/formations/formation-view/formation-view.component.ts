import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../../services/formation/formation.service';
import { GlobalConstants } from '../../../common/global-constants';
import moment from 'moment';
import * as _ from 'underscore';

@Component({
  selector: 'app-formation-view',
  templateUrl: './formation-view.component.html',
  styleUrls: ['./formation-view.component.less']
})
export class FormationViewComponent implements OnInit {
    formations: any;
    Locale;
    shortLocale;
    loading: boolean = true;
    constructor(private formationService: FormationService) {
        this.formationService = formationService;
        this.Locale = GlobalConstants.locale();
    }

    ngOnInit(): void {
        this.formationService.getAllFormation().subscribe(
            (response) => {
                this.formations = response.formations;
                this.formations = _.sortBy(this.formations, (formation) => {
                    formation.startDate = moment(formation.startDate).locale(GlobalConstants.shortLocale).format('MMMM YYYY');
                    if (formation.endDate) formation.endDate = moment(formation.endDate).locale(GlobalConstants.shortLocale).format('MMMM YYYY');
                    formation.image = GlobalConstants.getCompletePath(formation.image);
                    return formation.startDate.dateTime;
                }).reverse();
                this.loading = false;
            },
            (error) => {
                console.error('Erreur ! : ' + JSON.stringify(error));
            }
        );
    }

}
