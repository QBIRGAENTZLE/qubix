import { Injectable, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { ResponsiveSizeInfoRx } from 'ngx-responsive';

@Injectable({
    providedIn: 'root'
})

export class ResponsiveService implements OnDestroy {

    private responsiveSize: string;
    private sidebarHideSubject: Subject<boolean> = new Subject();

    constructor(
        private responsiveSizeInfoRx: ResponsiveSizeInfoRx,
        private router: Router
    ) {
        this.setInitialSize();
        this.responsiveSizeInfoRx.connect();
        this.responsiveSizeInfoRx.getResponsiveSize.subscribe(size => {
            console.log('RESPONSIVE SIZE', size);
            this.responsiveSize = size;

            if (this.isMobileSize()) {
                this.sidebarHideSubject.next(true);
            } else {
                this.sidebarHideSubject.next(false);
            }
        });

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && this.isMobileSize()) {
                this.sidebarHideSubject.next(true);
            }
        });
    }

    ngOnDestroy() {
        this.responsiveSizeInfoRx.disconnect();
    }

    private setInitialSize = (): void => {
        const width = this.responsiveSizeInfoRx._responsiveState._window.innerWidth;

        if (width < 576) {
            this.responsiveSize = 'xs';
        } else if (width < 768) {
            this.responsiveSize = 'sm';
        } else if (width < 992) {
            this.responsiveSize = 'md';
        } else if (width < 1200) {
            this.responsiveSize = 'lg';
        } else {
            this.responsiveSize = 'xl';
        }
    }

    public isXSSize = (): boolean => {
        if (this.responsiveSize === 'xs') {
            return true;
        } else {
            return false;
        }
    }

    public isMobileSize = (): boolean => {
        if (this.responsiveSize === 'xs' || this.responsiveSize === 'sm') {
            return true;
        } else {
            return false;
        }
    }

    public obsSidebarHide = (): Observable<boolean> => {
        return this.sidebarHideSubject.asObservable();
    }
}
