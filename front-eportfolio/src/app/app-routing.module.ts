import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationViewComponent } from './pages/formations/formation-view/formation-view.component';
import { DashboardViewComponent } from './pages/dashboard/dashboard-view/dashboard-view.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ExperienceViewComponent } from "./pages/experiencePro/experience-view/experience-view.component";
import {CompanyViewComponent} from "./pages/company/company-view/company-view.component";
import {SkillViewComponent} from "./pages/skill/skill-view/skill-view.component";
const routes: Routes = [
    {
        path        :   '',
        component   :   DashboardViewComponent
    },
    {
        path        :   'formations',
        component   :   FormationViewComponent
    },
    {
        path        :   'experience-professionnel',
        component   :   ExperienceViewComponent
    },
    {
        path        :   'companies',
        component   :   CompanyViewComponent
    },
    {
        path        :   'skills',
        component   :   SkillViewComponent
    },
    {
        path        :   'not-found',
        component   :   NotFoundComponent
    },
    {
        path        :   '**',
        redirectTo  :   'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
