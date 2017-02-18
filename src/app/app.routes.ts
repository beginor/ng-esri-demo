import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { SceneViewComponent } from './components/scene-view/scene-view.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'map-view', component: MapViewComponent },
    { path: 'scene-view', component: SceneViewComponent }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true, enableTracing: false });
