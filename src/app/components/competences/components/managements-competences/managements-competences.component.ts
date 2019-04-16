import { Component } from '@angular/core';

import { SkillCardsComponent } from '@components/competences/components/skill-cards.component';

import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-managements-competences',
    templateUrl: './managements-competences.component.html',
    styleUrls: ['./managements-competences.component.scss']
})
export class ManagementsCompetencesComponent extends SkillCardsComponent {

    public managementSkillsList: {} = {};

    constructor(
        private skillsService: SkillsService
    ) {
        super();
        this.managementSkillsList = this.skillsService.getManagementSkillsList();
    }
}
