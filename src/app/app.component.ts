import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav/';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {

    @ViewChild('mainSideBar') private mainSideBar: MatSidenav;

    constructor(
        private domSanitizer: DomSanitizer,
        private matIconRegistry: MatIconRegistry,
        private translateService: TranslateService
    ) {
        this.translateService.setDefaultLang('fr');
        this.translateService.use('fr');

        this.addCustomSVGIcon();
    }

    public toggleMenu = (): void => {
        this.mainSideBar.toggle();
    }

    private addCustomSVGIcon = (): void => {
        this.matIconRegistry.addSvgIcon(
            'flag-fr',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/flags/fr.svg')
        );
        this.matIconRegistry.addSvgIcon(
            'flag-en',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/flags/en.svg')
        );
    }

}
