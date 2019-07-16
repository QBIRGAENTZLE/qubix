import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormationService } from '@providers/formation.service';
import { ResponsiveService } from '@providers/responsive.service';

import { Formation } from '@models/formation';

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnDestroy {

    public formationList: Formation[];

    private responsiveSizeSubscription: Subscription;
    public isMobileSize: boolean;

    constructor(
        private formationService: FormationService,
        private responsiveService: ResponsiveService
    ) {
        this.formationList = this.formationService.getFormationList();

        if (this.responsiveService.isMobileSize()) {
            this.isMobileSize = true;
        }

        this.responsiveSizeSubscription = this.responsiveService.obsResponsiveSize().subscribe(size => {
            if (size === 'xs' || size === 'sm') {
                this.isMobileSize = true;
            } else {
                this.isMobileSize = false;
            }
        });
    }

    ngOnDestroy() {
        this.responsiveSizeSubscription.unsubscribe();
    }

}
