import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import * as anims from '../../app-animations';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('state', [
            anims.fadeIn(),
            anims.fadeOut()
        ])
    ]
})
export class HomeComponent {

    public message = 'Hello, Angular !';
    public count = 0;

    public state: any;

    public onClick() {
        this.message = `You have clicked ${++this.count} times!`;
    }

}
