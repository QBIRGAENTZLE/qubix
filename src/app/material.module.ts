import { NgModule } from '@angular/core';

import { MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
})

export class MaterialModule { }
