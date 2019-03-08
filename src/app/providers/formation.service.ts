import { Injectable } from '@angular/core';

import { Formation } from 'src/app/models/formation';

import formationJSONList from 'src/assets/json/formation.json';

@Injectable({
    providedIn: 'root'
})
export class FormationService {

    private formationList: Formation[] = [];

    constructor() {
        this.setListFromJSON();
    }

    private setListFromJSON = (): void => {
        for (const form of formationJSONList) {
            this.formationList.push(new Formation(form));
        }
    }

    public getFormationList = (): Formation[] => {
        return this.formationList;
    }
}
