import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true, enableTracing: true });
