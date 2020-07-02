import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextureRoutingModule } from './texture-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        TextureRoutingModule
    ]
})
export class TextureModule { }
