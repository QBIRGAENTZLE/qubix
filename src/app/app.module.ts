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
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MomentModule } from 'ngx-moment';
import 'moment/locale/fr';

// CUSTOM MODULES IMPORT
import { BootstrapModule } from '@app/bootstrap.module';
import { FAModule } from '@app/fa.module';
import { LayoutModule } from './components/layoutComponents/layout.module';
import { MaterialModule } from '@app/material.module';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// PIPES IMPORT
import { DurationPipe } from 'src/app/pipes/duration.pipe';

// COMPONENTS IMPORT
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationComponent } from './components/formation/formation.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

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
        AppRoutingModule,
        BootstrapModule,
        BrowserAnimationsModule,
        BrowserModule,
        FAModule,
        HttpClientModule,
        LayoutModule,
        MaterialModule,
        MglTimelineModule,
        MomentModule,
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
