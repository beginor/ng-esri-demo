import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZorroModule } from '../../zorro.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';


@NgModule({
    imports: [
        CommonModule,
        ZorroModule,
        WelcomeRoutingModule,
    ],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
