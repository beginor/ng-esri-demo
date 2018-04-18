import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsriLoaderGuard } from './services/esri-loader-guard';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
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
    }
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
