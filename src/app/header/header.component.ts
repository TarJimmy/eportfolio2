import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Jquery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToogleMenu(): void {
    if ($('.navbar button.navbar-toggler svg').hasClass('open')) {
      $('.navbar button.navbar-toggler svg').removeClass('open');
    } else {
      $('.navbar button.navbar-toggler svg').addClass('open');
    }
  }
}
