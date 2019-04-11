import { Component } from '@angular/core';

import { FormationService } from '@providers/formation.service';

import { Formation } from '@models/formation';

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

    public formationList: Formation[];

    constructor(
        private formationService: FormationService
    ) {
        this.formationList = this.formationService.getFormationList();
    }

}
