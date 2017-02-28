import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

export const RouteComponents = [
    HomeComponent
];

export const AppRoutes = RouterModule.forRoot(
    [
        { path: '', component: HomeComponent }
    ],
    { useHash: true, enableTracing: false }
);
