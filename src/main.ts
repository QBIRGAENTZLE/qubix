import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
    Angulartics2GoogleAnalytics.prototype.setUserProperties({
        domain: 'auto',
        trackingId: 'UA-138035847-1'
    });
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
