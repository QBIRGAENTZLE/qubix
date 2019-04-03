import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule
    ],
})

export class MaterialModule { }
