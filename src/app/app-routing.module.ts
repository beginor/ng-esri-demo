import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { MapViewComponent } from './components/map-view/map-view.component';
import {
    SceneViewComponent
} from './components/scene-view/scene-view.component';
import { EsriLoaderGuard } from './services/esri-loader-guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
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
            useHash: false,
            enableTracing: !environment.production
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
