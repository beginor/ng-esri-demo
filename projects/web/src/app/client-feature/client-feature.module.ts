import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientFeatureRoutingModule } from './client-feature-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        ClientFeatureRoutingModule
    ]
})
export class ClientFeatureModule { }
