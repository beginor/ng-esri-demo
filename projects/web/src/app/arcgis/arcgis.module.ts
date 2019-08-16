import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ArcgisRoutingModule } from './arcgis-routing.module';
import { MapViewComponent } from './map-view/map-view.component';
import { SceneViewComponent } from './scene-view/scene-view.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SceneEditorComponent } from './scene-editor/scene-editor.component';

@NgModule({
  declarations: [
      MapViewComponent,
      SceneViewComponent,
      HomeComponent,
      DashboardComponent,
      SceneEditorComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ArcgisRoutingModule
  ]
})
export class ArcgisModule { }
