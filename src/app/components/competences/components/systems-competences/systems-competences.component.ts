import { Component } from '@angular/core';

import { SkillsService } from '@providers/skills.service';

@Component({
    selector: 'app-systems-competences',
    templateUrl: './systems-competences.component.html',
    styleUrls: ['./systems-competences.component.scss']
})
export class SystemsCompetencesComponent {

    public systemSkillsList: {} = {};

    constructor(
        private skillsService: SkillsService
    ) {
        this.systemSkillsList = this.skillsService.getSystemSkillsList();
    }

}
