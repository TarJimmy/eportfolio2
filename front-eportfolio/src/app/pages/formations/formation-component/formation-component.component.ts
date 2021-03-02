import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-component',
  templateUrl: './formation-component.component.html',
  styleUrls: ['./formation-component.component.less']
})
export class FormationComponentComponent implements OnInit {
    institution :   String;
    title       :   String;
    status      :   String;
    town;
    constructor() { }

    ngOnInit(): void {}

}
