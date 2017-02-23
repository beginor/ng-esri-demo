import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { RouteComponents, AppRoutes } from './app.routes';
import { MapService } from './services/map.service';

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
    providers: [MapService],
    bootstrap: [AppComponent]
})
export class AppModule {}
