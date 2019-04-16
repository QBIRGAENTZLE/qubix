import { Component } from '@angular/core';

import { SkillCardsComponent } from '@components/competences/components/skill-cards.component';

import { ResponsiveService } from '@providers/responsive.service';
import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-languages-competences',
    templateUrl: './languages-competences.component.html',
    styleUrls: ['./languages-competences.component.scss', '../skill-cards.component.scss']
})
export class LanguagesCompetencesComponent extends SkillCardsComponent {

    public languageSkillsList: {} = {};

    constructor(
        protected responsiveService: ResponsiveService,
        private skillsService: SkillsService
    ) {
        super(responsiveService);
        this.languageSkillsList = this.skillsService.getLanguageSkillsList();
    }

}
