import { Injectable } from '@angular/core';

import { Experience } from 'src/app/models/experience';

import experiencesJSONList from 'src/assets/json/experiences.json';

@Injectable({
    providedIn: 'root'
})
export class ExperiencesService {

    private experiencesList: Experience[] = [];

    constructor() {
        this.setListFromJSON();
    }

    private setListFromJSON = (): void => {
        for (const exp of experiencesJSONList) {
            this.experiencesList.push(new Experience(exp));
        }
    }

    public getExperiencesList = (): Experience[] => {
        return this.experiencesList;
    }

}
