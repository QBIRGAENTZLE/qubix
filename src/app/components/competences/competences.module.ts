import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

// EXTERNAL MODULES IMPORT
import { ResponsiveModule } from 'ngx-responsive';

// CUSTOM MODULES IMPORT
import { BootstrapModule } from '@app/bootstrap.module';
import { MaterialModule } from '@app/material.module';

// COMPONENTS IMPORT
import { CompetencesComponent } from './competences.component';
import { DevelopmentsCompetencesComponent } from './components/developments-competences/developments-competences.component';
import { LanguagesCompetencesComponent } from './components/languages-competences/languages-competences.component';
import { ManagementsCompetencesComponent } from './components/managements-competences/managements-competences.component';
import { SystemsCompetencesComponent } from './components/systems-competences/systems-competences.component';

@NgModule({
    declarations: [
        CompetencesComponent,
        DevelopmentsCompetencesComponent,
        LanguagesCompetencesComponent,
        ManagementsCompetencesComponent,
        SystemsCompetencesComponent
    ],
    imports: [
        BootstrapModule,
        CommonModule,
        CompRoutingModule,
        HttpClientModule,
        MaterialModule,
        ResponsiveModule,
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
