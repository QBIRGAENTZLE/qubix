import { NgModule } from '@angular/core';

// CUSTOM MODULES IMPORT
import { MaterialModule } from '../../material.module';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        FooterComponent,
        SidebarComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        FooterComponent,
        SidebarComponent
    ]
})

export class LayoutModule { }
