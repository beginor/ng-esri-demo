import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { SceneEditorRoutingModule } from './scene-editor-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        NgbTooltipModule,
        SceneEditorRoutingModule
    ]
})
export class SceneEditorModule { }
