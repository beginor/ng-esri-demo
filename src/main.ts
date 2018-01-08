import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import fontawesome from '@fortawesome/fontawesome';
import fab from '@fortawesome/fontawesome-free-brands';
import far from '@fortawesome/fontawesome-free-regular';
import fas from '@fortawesome/fontawesome-free-solid';

if (environment.production) {
    enableProdMode();
}

fontawesome.library.add(fab, far, fas);

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(val => {
        // console.log('app bootstrap');
    })
    .catch(err => {
        console.error(err);
    });
