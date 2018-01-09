import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsriLoaderGuard } from 'ng-esri-service';

import { HomeComponent } from './components/home/home.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import {
    SceneViewComponent
} from './components/scene-view/scene-view.component';

const routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'map-view',
        component: MapViewComponent,
        canActivate: [
            EsriLoaderGuard
        ]
    },
    {
        path: 'scene-view', component: SceneViewComponent,
        canActivate: [
            EsriLoaderGuard
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
