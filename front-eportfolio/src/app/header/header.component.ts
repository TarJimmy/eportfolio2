import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../common/global-constants";
declare var $: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    Locale;
    constructor() {
        this.Locale = GlobalConstants.locale();
    }

    ngOnInit(): void {
        $('li.nav-item a.nav-link').on('click', function (e) {
            e.stopPropagation();
        });
        $('li.nav-item').on('click', function (e) {
            window.location.href = $(this).children('a.nav-link').attr('href');
            e.preventDefault();
        });
    }

    onToogleMenu(): void {
        if ($('.navbar button.navbar-toggler svg').hasClass('open')) {
            $('.navbar button.navbar-toggler svg').removeClass('open');
        } else {
            $('.navbar button.navbar-toggler svg').addClass('open');
        }
    }

    /**
     * Saiid if lang is lang select
     * @param lang
     */
    langIsSelect(lang: String) {
        return localStorage.getItem('lang') == lang;
    }

    /**
     * Change select lang
     */
    public selectChangeLang(event): void {
        localStorage.setItem('lang', event.target.value);
        window.location.reload();
    }
}
