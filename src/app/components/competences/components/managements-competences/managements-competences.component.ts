import { Component } from '@angular/core';

import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-managements-competences',
    templateUrl: './managements-competences.component.html',
    styleUrls: ['./managements-competences.component.scss']
})
export class ManagementsCompetencesComponent {

    public managementSkillsList: {} = {};

    constructor(
        private skillsService: SkillsService
    ) {
        this.managementSkillsList = this.skillsService.getManagementSkillsList();
    }
}
