import { NgModule } from '@angular/core';

import { MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
})

export class MaterialModule { }
