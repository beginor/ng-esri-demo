import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (!isLocal()) {
    enableProdMode();
}

function isLocal() {
    return document.location.href.indexOf('127.0.0.1') > -1
        || document.location.hash.indexOf('localhost') > -1;
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(val => {
        //console.log('app bootstrap');
    })
    .catch(err => {
        console.error(err);
    });
