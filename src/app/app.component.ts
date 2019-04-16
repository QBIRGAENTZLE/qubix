import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav/';

import { ResponsiveService } from '@providers/responsive.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnDestroy, OnInit {

    @ViewChild('mainSideBar') private mainSideBar: MatSidenav;

    private sidebarHideSubscription: Subscription;
    public sidebarOpen: boolean;

    constructor(
        private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
        private domSanitizer: DomSanitizer,
        private matIconRegistry: MatIconRegistry,
        private responsiveService: ResponsiveService,
        private translateService: TranslateService
    ) {
        this.angulartics2GoogleAnalytics.startTracking();
        this.translateService.setDefaultLang('fr');
        this.translateService.use('fr');

        this.addCustomSVGIcon();

        this.sidebarHideSubscription = this.responsiveService.obsSidebarHide().subscribe(hide => {
            if (hide) {
                this.mainSideBar.close();
            } else {
                this.mainSideBar.open();
            }
        });
    }

    ngOnInit() {
        if (this.responsiveService.isMobileSize()) {
            this.sidebarOpen = false;
        } else {
            this.sidebarOpen = true;
        }
    }

    ngOnDestroy() {
        this.sidebarHideSubscription.unsubscribe();
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
