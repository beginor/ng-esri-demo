import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeInAnimation } from '../../animations';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [fadeInAnimation],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent {

    public message = 'Hello, Angular !';
    public count = 0;

    public state: any;

    public onClick() {
        this.message = `You have clicked ${++this.count} times!`;
    }

}
