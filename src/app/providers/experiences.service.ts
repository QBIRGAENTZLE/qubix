import { Injectable } from '@angular/core';

import { Experience } from '@models/experience';

import experiencesListJSON from '@json/experiences.json';

@Injectable({
    providedIn: 'root'
})

export class ExperiencesService {

    private experiencesList: Experience[] = [];

    constructor() {
        this.setListFromJSON();
    }

    private setListFromJSON = (): void => {
        for (const exp of experiencesListJSON) {
            this.experiencesList.push(new Experience(exp));
        }
    }

    public getExperiencesList = (): Experience[] => {
        return this.experiencesList;
    }

}
