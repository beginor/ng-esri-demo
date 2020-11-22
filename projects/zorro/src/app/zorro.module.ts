import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
    MenuFoldOutline,
    MenuUnfoldOutline,
    FormOutline,
    DashboardOutline
} from '@ant-design/icons-angular/icons';

const icons = [
    MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule,
        NzIconModule
    ],
    exports: [
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule,
        NzIconModule
    ],
    providers: [
        { provide: NZ_ICONS, useValue: icons }
    ]
})
export class ZorroModule { }
