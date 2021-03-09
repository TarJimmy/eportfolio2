import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from "../../../common/global-constants";

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.less']
})
export class AboutViewComponent implements OnInit {
    Locale;
    pathImage: string;
    lichessAcount: string;
    chessAcount: string;
    constructor() {
        this.Locale = GlobalConstants.locale();
        this.pathImage = GlobalConstants.getCompletePath('about/');
        this.lichessAcount = 'Leurky';
        this.chessAcount = 'LaSegue';
    }

    ngOnInit(): void {}

}
