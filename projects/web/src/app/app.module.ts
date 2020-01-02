import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppSharedModule } from 'app-shared';

import { AppCommonModule } from './common/app-common.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsriLoaderGuard } from './services/esri-loader-guard';
import { environment } from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NgbModule,
        AppSharedModule,
        AppCommonModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    providers: [
        EsriLoaderGuard,
        {
            provide: 'ArcGisJsApiOptions',
            useValue: {
                version: '4.14',
                url: `${environment.arcgisJsApi}/init.js`,
                css: `${environment.arcgisJsApi}/esri/css/main.css`,
                dojoConfig: environment.dojoConfig,
                trustedServers: environment.trustedServers
            }
        }
    ]
})
export class AppModule {}
