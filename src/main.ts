/// <reference path="../typings/index.d.ts" />
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(val => {
        console.log('app bootstrap');
    })
    .catch(err => {
        console.error(err);
    });
