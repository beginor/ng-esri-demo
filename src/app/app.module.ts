import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EsriLoaderModule } from 'angular-esri-loader';

import { AppComponent } from './app.component';
import { AppRoutes, RouteComponents } from './app.routes';
import { MapService } from './services/map.service';

@NgModule({
    declarations: [
        AppComponent, RouteComponents
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NgbModule.forRoot(),
        EsriLoaderModule,
        AppRoutes
    ],
    providers: [MapService],
    bootstrap: [AppComponent]
})
export class AppModule {}
