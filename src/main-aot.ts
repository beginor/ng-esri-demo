import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

import './main.css';

enableProdMode();

platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .then(val => {
        // console.log('app bootstrap');
    })
    .catch(err => {
        // tslint:disable-next-line:no-console
        console.error(err);
    });
