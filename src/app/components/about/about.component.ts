import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import {
    bounce, flash, headShake, jello, pulse, rubberBand, shake, swing, tada,
    wobble
} from '../../animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [
        trigger('animation', [
            transition('* => bounce', useAnimation(bounce)),
            transition('* => flash', useAnimation(flash)),
            transition('* => headShake', useAnimation(headShake)),
            transition('* => jello', useAnimation(jello)),
            transition('* => pulse', useAnimation(pulse)),
            transition('* => rubberBand', useAnimation(rubberBand)),
            transition('* => shake', useAnimation(shake)),
            transition('* => swing', useAnimation(swing)),
            transition('* => tada', useAnimation(tada)),
            transition('* => wobble', useAnimation(wobble))
        ])
    ]
})
export class AboutComponent implements OnInit {

    public animation = 'bounce';

    constructor() { }

    public ngOnInit() {
    }

    public setAnimation($event: Event): void {
        const target = $event.target as HTMLSelectElement;
        this.animation = target.value;
    }

    public replayAnimation(): void {
        const anim = this.animation;
        this.animation = '';
        setTimeout(() => {
            this.animation = anim;
        }, 100);
    }

}
