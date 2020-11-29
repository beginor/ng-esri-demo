import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from 'app-shared';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        AppSharedModule
    ],
    exports: [
        NavBarComponent
    ]
})
export class AppCommonModule { }
