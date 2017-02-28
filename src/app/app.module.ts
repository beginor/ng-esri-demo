import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { RouteComponents, AppRoutes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        RouteComponents
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        NgbModule,
        AppRoutes
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
