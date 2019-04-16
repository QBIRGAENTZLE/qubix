import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResponsiveService } from '@providers/responsive.service';

@Component({
    selector: 'app-skill-cards',
    styleUrls: ['./skill-cards.component.scss']
})

export class SkillCardsComponent implements OnDestroy {

    public colspan = 3;
    public nbCols = 4;
    public rowHeight = 40;

    private responsiveSizeSubscription: Subscription;

    constructor(
        protected responsiveService: ResponsiveService
    ) {
        if (this.responsiveService.isXSSize() || this.responsiveService.isSMSize() || this.responsiveService.isMDSize()) {
            this.setSmallCol();
        }

        this.responsiveSizeSubscription = this.responsiveService.obsResponsiveSize().subscribe(size => {
            if (size === 'xs' || size === 'sm' || size === 'md') {
                this.setSmallCol();
            } else {
                this.setNormalCol();
            }
        });
    }

    ngOnDestroy() {
        this.responsiveSizeSubscription.unsubscribe();
    }

    private setNormalCol = (): void => {
        this.colspan = 3;
        this.nbCols = 4;
        this.rowHeight = 40;
    }

    private setSmallCol = (): void => {
        this.colspan = 1;
        this.nbCols = 1;
        this.rowHeight = 20;
    }

}
