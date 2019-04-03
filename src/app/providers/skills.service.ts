import { Injectable } from '@angular/core';

import { Skill } from '@models/skill';

import LanguageSkillsJSON from '@json/skills/language.json';
import ManagementSkillsJSON from '@json/skills/management.json';
import SystemSkillsJSON from '@json/skills/system.json';
import WebDevSkillsJSON from '@json/skills/webdevelopment.json';

@Injectable({
    providedIn: 'root'
})

export class SkillsService {

    private languageSkillsList: {} = {};
    private managementSkillsList: {} = {};
    private systemSkillsList: {} = {};
    private webDevSkillsList: {} = {};

    constructor() {
        this.setListFromJSON('webDev', WebDevSkillsJSON);
        this.setListFromJSON('management', ManagementSkillsJSON);
        this.setListFromJSON('system', SystemSkillsJSON);
        this.setListFromJSON('language', LanguageSkillsJSON);
    }

    private setListFromJSON = (list: string, JSONList: {}): void => {
        const tmpList: {} = {};

        for (const skillCat in JSONList) {
            if (JSONList.hasOwnProperty(skillCat)) {
                tmpList[skillCat] = [];
                for (const skill of JSONList[skillCat]) {
                    tmpList[skillCat].push(new Skill(skill));
                }
            }
        }

        this[`${list}SkillsList`] = tmpList;
    }

    public getWebDevSkillsList = (): {} => {
        return this.webDevSkillsList;
    }

    public getManagementSkillsList = (): {} => {
        return this.managementSkillsList;
    }

    public getSystemSkillsList = (): {} => {
        return this.systemSkillsList;
    }

    public getLanguageSkillsList = (): {} => {
        return this.languageSkillsList;
    }
}
