import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { RouteComponents, AppRoutes } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { SceneViewComponent } from './components/scene-view/scene-view.component';

@NgModule({
    declarations: [
        AppComponent, RouteComponents
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        NgbModule,
        RouterModule.forRoot(
            AppRoutes,
            { useHash: false, enableTracing: false }
        )
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
