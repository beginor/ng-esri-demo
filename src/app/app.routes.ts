import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Map3dComponent } from './components/map3d/map3d.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'map3d', component: Map3dComponent }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true, enableTracing: false });
