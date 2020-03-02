import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSpatialRoutingModule } from './time-spatial-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        TimeSpatialRoutingModule
    ]
})
export class TimeSpatialModule { }
