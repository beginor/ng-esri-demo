import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { fadeIn } from 'ng-animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [
        trigger('animation', [transition(':enter', useAnimation(fadeIn))])
    ],
    host: { '[@animation]': '' }
})
export class AboutComponent implements OnInit {

    public animation = 'bounce';

    constructor() { }

    public ngOnInit() { }

}
