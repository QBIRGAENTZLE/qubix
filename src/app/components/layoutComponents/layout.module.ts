import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG TRANSLATE IMPORTS
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

// CUSTOM MODULES IMPORT
import { MaterialModule } from '../../material.module';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        FooterComponent,
        SidebarComponent,
        HeaderComponent
    ],
    imports: [
        MaterialModule,
        HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }),
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        HeaderComponent
    ]
})

export class LayoutModule { }
