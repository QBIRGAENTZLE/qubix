import { Component } from '@angular/core';

import { ExperiencesService } from 'src/app/providers/experiences.service';

import { Experience } from 'src/app/models/experience';


@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

    public experiencesList: Experience[];

    constructor(
        private experiencesService: ExperiencesService
    ) {
        this.experiencesList = this.experiencesService.getExperiencesList();
        console.log('explist', this.experiencesList);
    }

}
