import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ExperiencesService } from '@providers/experiences.service';
import { ResponsiveService } from '@providers/responsive.service';

import { Experience } from '@models/experience';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnDestroy {

    public experiencesList: Experience[];

    private responsiveSizeSubscription: Subscription;
    public isMobileSize: boolean;

    constructor(
        private experiencesService: ExperiencesService,
        private responsiveService: ResponsiveService
    ) {
        this.experiencesList = this.experiencesService.getExperiencesList();

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
