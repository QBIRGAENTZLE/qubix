import { Injectable } from '@angular/core';

import { Project } from '@models/project';

import projectsListJSON from '@json/projects.json';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private projectsList: {} = {};

    constructor() {
        this.setListFromJSON();
    }

    private setListFromJSON = (): void => {
        const tmpList: {} = {};

        for (const projectComp in projectsListJSON) {
            if (projectsListJSON.hasOwnProperty(projectComp)) {
                tmpList[projectComp] = [];
                for (const project of projectsListJSON[projectComp]) {
                    tmpList[projectComp].push(new Project(project));
                }
            }
        }

        this.projectsList = tmpList;
    }

    public getProjectsList = (): {} => {
        return this.projectsList;
    }
}
