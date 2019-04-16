import { Component } from '@angular/core';

import { SkillCardsComponent } from '@components/competences/components/skill-cards.component';

import { ResponsiveService } from '@providers/responsive.service';
import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-developments-competences',
    templateUrl: './developments-competences.component.html',
    styleUrls: ['./developments-competences.component.scss', '../skill-cards.component.scss'],
})

export class DevelopmentsCompetencesComponent extends SkillCardsComponent {

    public webDevSkillsList: {} = {};

    constructor(
        protected responsiveService: ResponsiveService,
        private skillsService: SkillsService
    ) {
        super(responsiveService);
        this.webDevSkillsList = this.skillsService.getWebDevSkillsList();
    }
}
