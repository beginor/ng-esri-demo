import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import {
    SceneViewComponent
} from './components/scene-view/scene-view.component';

export const RouteComponents = [
    HomeComponent, MapViewComponent, SceneViewComponent
];

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'map-view', component: MapViewComponent },
    { path: 'scene-view', component: SceneViewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(
    routes,
    { useHash: true, enableTracing: false }
);
