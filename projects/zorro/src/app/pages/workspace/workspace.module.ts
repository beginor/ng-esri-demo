import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZorroModule } from '../../zorro.module';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';


@NgModule({
    declarations: [WorkspaceComponent],
    imports: [
        CommonModule,
        ZorroModule,
        WorkspaceRoutingModule
    ]
})
export class WorkspaceModule { }
