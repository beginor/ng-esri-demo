import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonModule } from '../common/app-common.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        AppCommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
