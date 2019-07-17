import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProjectsService } from '@providers/projects.service';
import { ResponsiveService } from '@providers/responsive.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

    public projectsList: {} = {};

    constructor(
        private projectsService: ProjectsService,
        public responsiveService: ResponsiveService

    ) {
        this.projectsList = this.projectsService.getProjectsList();
    }


}
