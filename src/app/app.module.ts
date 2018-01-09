import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EsriLoaderGuard, EsriMapService } from 'ng-esri-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import {
    SceneViewComponent
} from './components/scene-view/scene-view.component';
import { createEsriLoaderOptions } from './config/factories';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MapViewComponent,
        SceneViewComponent
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
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    providers: [
        EsriMapService,
        EsriLoaderGuard,
        { provide: 'ESRI_LOADER_OPTIONS', useFactory: createEsriLoaderOptions }
    ]
})
export class AppModule {}
