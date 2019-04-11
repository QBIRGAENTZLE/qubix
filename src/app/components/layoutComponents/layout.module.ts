import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG TRANSLATE IMPORTS
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// ROUTING
import { AppRoutingModule } from '@app/app-routing.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

// CUSTOM MODULES IMPORT
import { FAModule } from '@app/fa.module';
import { MaterialModule } from '@app/material.module';

import { FooterComponent } from '@components/layoutComponents/footer/footer.component';
import { SidebarComponent } from '@components/layoutComponents/sidebar/sidebar.component';
import { HeaderComponent } from '@components/layoutComponents/header/header.component';

@NgModule({
    declarations: [
        FooterComponent,
        SidebarComponent,
        HeaderComponent
    ],
    imports: [
        AppRoutingModule,
        FAModule,
        MaterialModule,
        HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        })
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        HeaderComponent
    ]
})

export class LayoutModule { }
