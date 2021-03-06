// CORE MODULES IMPORT
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG TRANSLATE IMPORTS
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

// EXTERNAL MODULES IMPORT
import { Angulartics2Module } from 'angulartics2';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/fr';
import { ResponsiveModule } from 'ngx-responsive';

// CUSTOM MODULES IMPORT
import { BootstrapModule } from '@app/bootstrap.module';
import { FAModule } from '@app/fa.module';
import { LayoutModule } from '@app/components/layoutComponents/layout.module';
import { MaterialModule } from '@app/material.module';

// ROUTING
import { AppRoutingModule } from '@app/app-routing.module';

// PIPES IMPORT
import { DurationPipe } from '@pipes/duration.pipe';

// COMPONENTS IMPORT
import { AppComponent } from '@app/app.component';
import { ContactComponent } from '@components/contact/contact.component';
import { ExperiencesComponent } from '@components/experiences/experiences.component';
import { FormationComponent } from '@components/formation/formation.component';
import { HomeComponent } from '@components/home/home.component';
import { ProjectsComponent } from '@components/projects/projects.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        DurationPipe,
        ExperiencesComponent,
        FormationComponent,
        HomeComponent,
        ProjectsComponent
    ],
    imports: [
        Angulartics2Module.forRoot(),
        AppRoutingModule,
        BootstrapModule,
        BrowserAnimationsModule,
        BrowserModule,
        FAModule,
        HttpClientModule,
        LayoutModule,
        MaterialModule,
        MomentModule,
        ResponsiveModule.forRoot({
            breakPoints: {
                xs: { max: 575 },
                sm: { min: 576, max: 767 },
                md: { min: 768, max: 991 },
                lg: { min: 992, max: 1199 },
                xl: { min: 1200 }
            },
            debounceTime: 100
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
