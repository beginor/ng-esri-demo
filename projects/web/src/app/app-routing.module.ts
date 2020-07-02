import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { EsriLoaderGuard } from './services/esri-loader-guard';

// tslint:disable: max-line-length
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'scene-editor',
        loadChildren: () => import('./scene-editor/scene-editor.module').then(m => m.SceneEditorModule)
    },
    {
        path: 'mesh-layer',
        loadChildren: () => import('./mesh-layer/mesh-layer.module').then(m => m.MeshLayerModule)
    },
    {
        path: 'time-spatial',
        loadChildren: () => import('./time-spatial/time-spatial.module').then(m => m.TimeSpatialModule)
    },
    {
        path: 'client-feature',
        loadChildren: () => import('./client-feature/client-feature.module').then(m => m.ClientFeatureModule)
    },
    {
        path: 'plane',
        loadChildren: () => import('./plane/plane.module').then(m => m.PlaneModule)
    },
    {
        path: 'texture',
        loadChildren: () => import('./texture/texture.module').then(m => m.TextureModule)
    }
];
// tslint:enable: max-line-length

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
