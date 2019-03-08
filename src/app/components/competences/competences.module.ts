import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG TRANSLATE IMPORTS
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// ROUTING
import { CompRoutingModule } from './comp-routing.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

// CUSTOM MODULES IMPORT
import { MaterialModule } from '../../material.module';

import { CompetencesComponent } from './competences.component';
import { DevelopmentsCompetencesComponent } from './components/developments-competences/developments-competences.component';
import { ManagementsCompetencesComponent } from './components/managements-competences/managements-competences.component';

@NgModule({
    declarations: [
        CompetencesComponent,
        DevelopmentsCompetencesComponent,
        ManagementsCompetencesComponent
    ],
    imports: [
        CompRoutingModule,
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
        CompetencesComponent
    ]
})
export class CompetencesModule { }
