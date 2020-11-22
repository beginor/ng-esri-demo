import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable: max-line-length
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: 'monitor', loadChildren: () => import('./pages/monitor/monitor.module').then(m => m.MonitorModule) },
    { path: 'workspace', loadChildren: () => import('./pages/workspace/workspace.module').then(m => m.WorkspaceModule) }
];
// tslint:enable: max-line-length
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
