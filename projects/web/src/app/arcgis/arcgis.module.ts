import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArcgisRoutingModule } from './arcgis-routing.module';
import { MapViewComponent } from './map-view/map-view.component';
import { SceneViewComponent } from './scene-view/scene-view.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
      MapViewComponent,
      SceneViewComponent,
      HomeComponent,
      DashboardComponent
  ],
  imports: [
    CommonModule,
    ArcgisRoutingModule
  ]
})
export class ArcgisModule { }
