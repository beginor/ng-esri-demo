import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [
        trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
    ]
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
