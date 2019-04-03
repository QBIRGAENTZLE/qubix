import { Component } from '@angular/core';

import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-developments-competences',
    templateUrl: './developments-competences.component.html',
    styleUrls: ['./developments-competences.component.scss'],
})

export class DevelopmentsCompetencesComponent {

    public webDevSkillsList: {} = {};

    constructor(
        private skillsService: SkillsService
    ) {
        this.webDevSkillsList = this.skillsService.getWebDevSkillsList();

    }
}
