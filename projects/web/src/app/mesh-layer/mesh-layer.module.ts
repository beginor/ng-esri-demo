import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeshLayerRoutingModule } from './mesh-layer-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        MeshLayerRoutingModule
    ]
})
export class MeshLayerModule { }
