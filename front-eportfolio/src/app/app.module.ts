import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormationViewComponent } from './pages/formations/formation-view/formation-view.component';
import { DashboardViewComponent } from './pages/dashboard/dashboard-view/dashboard-view.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ExperienceViewComponent } from './pages/experiencePro/experience-view/experience-view.component';
import { CompanyViewComponent } from './pages/company/company-view/company-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillViewComponent } from './pages/skill/skill-view/skill-view.component';
import {AboutViewComponent} from "./pages/about/about-view/about-view.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FormationViewComponent,
        DashboardViewComponent,
        NotFoundComponent,
        ExperienceViewComponent,
        CompanyViewComponent,
        SkillViewComponent,
        AboutViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
