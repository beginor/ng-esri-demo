import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

@NgModule({
    declarations: [
        NavBarComponent,
        SvgIconComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [
        NavBarComponent,
        SvgIconComponent
    ]
})
export class AppCommonModule { }
