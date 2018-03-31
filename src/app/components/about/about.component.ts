import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { jello } from '../../animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [
        trigger('jello', [transition(':enter', useAnimation(jello))])
    ]
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
