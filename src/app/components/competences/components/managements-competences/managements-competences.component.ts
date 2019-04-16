import { Component } from '@angular/core';

import { SkillCardsComponent } from '@components/competences/components/skill-cards.component';

import { ResponsiveService } from '@providers/responsive.service';
import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-managements-competences',
    templateUrl: './managements-competences.component.html',
    styleUrls: ['./managements-competences.component.scss', '../skill-cards.component.scss']
})

export class ManagementsCompetencesComponent extends SkillCardsComponent {

    public managementSkillsList: {} = {};

    constructor(
        protected responsiveService: ResponsiveService,
        private skillsService: SkillsService
    ) {
        super(responsiveService);
        this.managementSkillsList = this.skillsService.getManagementSkillsList();
    }
}
