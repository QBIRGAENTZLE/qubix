import { Component } from '@angular/core';

import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-languages-competences',
    templateUrl: './languages-competences.component.html',
    styleUrls: ['./languages-competences.component.scss']
})
export class LanguagesCompetencesComponent {

    public languageSkillsList: {} = {};

    constructor(
        private skillsService: SkillsService
    ) {
        this.languageSkillsList = this.skillsService.getLanguageSkillsList();
    }

}
