/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(val => {
        console.log('app bootstrap');
    })
    .catch(err => {
        console.error(err);
    });
