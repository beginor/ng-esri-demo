import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZorroModule } from '../../zorro.module';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';


@NgModule({
    declarations: [MonitorComponent],
    imports: [
        CommonModule,
        ZorroModule,
        MonitorRoutingModule
    ]
})
export class MonitorModule { }
