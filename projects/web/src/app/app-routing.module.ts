import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { EsriLoaderGuard } from './services/esri-loader-guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'about',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'scene-editor',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('./scene-editor/scene-editor.module').then(m => m.SceneEditorModule)
    },
    {
        path: 'mesh-layer',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('./mesh-layer/mesh-layer.module').then(m => m.MeshLayerModule)
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
