import { Component } from '@angular/core';

import { SkillCardsComponent } from '@components/competences/components/skill-cards.component';

import { ResponsiveService } from '@providers/responsive.service';
import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-systems-competences',
    templateUrl: './systems-competences.component.html',
    styleUrls: ['./systems-competences.component.scss', '../skill-cards.component.scss']
})
export class SystemsCompetencesComponent extends SkillCardsComponent {

    public systemSkillsList: {} = {};

    constructor(
        protected responsiveService: ResponsiveService,
        private skillsService: SkillsService
    ) {
        super(responsiveService);
        this.systemSkillsList = this.skillsService.getSystemSkillsList();
    }

}
