import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../../common/global-constants";
import {ProjectService} from "../../../services/project/project.service";
// import { MatDialog } from '@angular/material/dialog';
// import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less']
})
export class ProjectViewComponent implements OnInit {

    Locale;
    projects: Array<any> = [];

    constructor(private projectService: ProjectService) {
        this.projectService = projectService;
        this.Locale = GlobalConstants.locale();
    }

    ngOnInit(): void {
        this.projectService.getAllProjects().subscribe((res) => {
            res.projects.forEach((project) => {
                if (project.hasOwnProperty('awardId')) {
                    project.awardId.image = GlobalConstants.getCompletePath(project.awardId.image);
                }
                const listProject = this.projects.find((listObject => listObject.hasOwnProperty('type') && listObject.type === project.type));
                if (listProject === undefined) {
                    this.projects.push({
                        type        : project.type,
                        projects    : [project]
                    })
                } else {
                    listProject.projects.push(project);
                }
            })
            this.projects.forEach((listProjects) => {
                listProjects.projects.sort((projectA, projectB) => {
                    if (projectA.ranking === projectB.ranking) {
                        return 0;
                    } else {
                        return projectA.ranking > projectB.ranking ? 1 : -1;
                    }
                })
            })
            console.log(this.projects)
        });
    }

    public openDetails(projectId) : void {
        // const dialogRef = this.dialog.open(ProjectDetailsComponent, {
        //     height: '400px',
        //     width: '600px',
        // });
    }

}
