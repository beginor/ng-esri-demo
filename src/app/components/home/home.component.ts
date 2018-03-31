import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeIn } from '../../animations';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
    ],
    host: { '[@fadeIn]': '' }
})
export class HomeComponent {

    public message = 'Hello, Angular !';
    public count = 0;

    public state: any;

    public onClick() {
        this.message = `You have clicked ${++this.count} times!`;
    }

}
