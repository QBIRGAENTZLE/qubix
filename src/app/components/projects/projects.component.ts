import { Component } from '@angular/core';

import { ProjectsService } from '@providers/projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

    public projectsList: {} = {};

    constructor(
        private projectsService: ProjectsService
    ) {
        this.projectsList = this.projectsService.getProjectsList();
    }


}
