import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

export const RouteComponents = [
    HomeComponent
];

export const AppRoutes = RouterModule.forRoot(
    [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent }
    ],
    { useHash: true, enableTracing: false }
);
