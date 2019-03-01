import { NgModule } from '@angular/core';

import { MatButtonModule, MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
})

export class MaterialModule { }
