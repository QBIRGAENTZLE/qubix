import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faBrain,
    faBuilding,
    faFileCode
} from '@fortawesome/free-solid-svg-icons';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule
    ]
})
export class FAModule {

    constructor() {
        library.add(
            faBrain,
            faBuilding,
            faFileCode,
            faLinkedin
        );
    }
}
