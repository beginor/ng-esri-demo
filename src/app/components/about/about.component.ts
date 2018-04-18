import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import {
    bounce, flash, headShake, jello, pulse, rubberBand, shake, swing, tada,
    wobble, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp,
    bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp,
    fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight,
    fadeInRightBig, fadeInUp, fadeInUpBig, fadeOut, fadeOutDown, fadeOutDownBig,
    fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp,
    fadeOutUpBig, flip, flipInX, flipInY, flipOutX, flipOutY, lightSpeedIn,
    lightSpeedOut, rotateIn, rotateInDownLeft, rotateInDownRight,
    rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft,
    rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight, slideInDown,
    slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft,
    slideOutRight, slideOutUp, hinge, jackInTheBox, rollIn, rollOut, zoomIn,
    zoomInDown, zoomInLeft, zoomInRight, zoomInUp, zoomOut, zoomOutDown,
    zoomOutLeft, zoomOutRight, zoomOutUp
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
            transition('* => wobble', useAnimation(wobble)),
            transition('* => bounceIn', useAnimation(bounceIn)),
            transition('* => bounceInDown', useAnimation(bounceInDown)),
            transition('* => bounceInLeft', useAnimation(bounceInLeft)),
            transition('* => bounceInRight', useAnimation(bounceInRight)),
            transition('* => bounceInUp', useAnimation(bounceInUp)),
            transition('* => bounceOut', useAnimation(bounceOut)),
            transition('* => bounceOutDown', useAnimation(bounceOutDown)),
            transition('* => bounceOutLeft', useAnimation(bounceOutLeft)),
            transition('* => bounceOutRight', useAnimation(bounceOutRight)),
            transition('* => bounceOutUp', useAnimation(bounceOutUp)),
            transition('* => fadeIn', useAnimation(fadeIn)),
            transition('* => fadeInDown', useAnimation(fadeInDown)),
            transition('* => fadeInDownBig', useAnimation(fadeInDownBig)),
            transition('* => fadeInLeft', useAnimation(fadeInLeft)),
            transition('* => fadeInLeftBig', useAnimation(fadeInLeftBig)),
            transition('* => fadeInRight', useAnimation(fadeInRight)),
            transition('* => fadeInRightBig', useAnimation(fadeInRightBig)),
            transition('* => fadeInUp', useAnimation(fadeInUp)),
            transition('* => fadeInUpBig', useAnimation(fadeInUpBig)),
            transition('* => fadeOut', useAnimation(fadeOut)),
            transition('* => fadeOutDown', useAnimation(fadeOutDown)),
            transition('* => fadeOutDownBig', useAnimation(fadeOutDownBig)),
            transition('* => fadeOutLeft', useAnimation(fadeOutLeft)),
            transition('* => fadeOutLeftBig', useAnimation(fadeOutLeftBig)),
            transition('* => fadeOutRight', useAnimation(fadeOutRight)),
            transition('* => fadeOutRightBig', useAnimation(fadeOutRightBig)),
            transition('* => fadeOutUp', useAnimation(fadeOutUp)),
            transition('* => fadeOutUpBig', useAnimation(fadeOutUpBig)),
            transition('* => flip', useAnimation(flip)),
            transition('* => flipInX', useAnimation(flipInX)),
            transition('* => flipInY', useAnimation(flipInY)),
            transition('* => flipOutX', useAnimation(flipOutX)),
            transition('* => flipOutY', useAnimation(flipOutY)),
            transition('* => lightSpeedIn', useAnimation(lightSpeedIn)),
            transition('* => lightSpeedOut', useAnimation(lightSpeedOut)),
            transition('* => rotateIn', useAnimation(rotateIn)),
            transition('* => rotateInDownLeft', useAnimation(rotateInDownLeft)),
            // tslint:disable-next-line:max-line-length
            transition('* => rotateInDownRight', useAnimation(rotateInDownRight)),
            transition('* => rotateInUpLeft', useAnimation(rotateInUpLeft)),
            transition('* => rotateInUpRight', useAnimation(rotateInUpRight)),
            transition('* => rotateOut', useAnimation(rotateOut)),
            // tslint:disable-next-line:max-line-length
            transition('* => rotateOutDownLeft', useAnimation(rotateOutDownLeft)),
            // tslint:disable-next-line:max-line-length
            transition('* => rotateOutDownRight', useAnimation(rotateOutDownRight)),
            transition('* => rotateOutUpLeft', useAnimation(rotateOutUpLeft)),
            transition('* => rotateOutUpRight', useAnimation(rotateOutUpRight)),
            transition('* => slideInDown', useAnimation(slideInDown)),
            transition('* => slideInLeft', useAnimation(slideInLeft)),
            transition('* => slideInRight', useAnimation(slideInRight)),
            transition('* => slideInUp', useAnimation(slideInUp)),
            transition('* => slideOutDown', useAnimation(slideOutDown)),
            transition('* => slideOutLeft', useAnimation(slideOutLeft)),
            transition('* => slideOutRight', useAnimation(slideOutRight)),
            transition('* => slideOutUp', useAnimation(slideOutUp)),
            transition('* => hinge', useAnimation(hinge)),
            transition('* => jackInTheBox', useAnimation(jackInTheBox)),
            transition('* => rollIn', useAnimation(rollIn)),
            transition('* => rollOut', useAnimation(rollOut)),
            transition('* => zoomIn', useAnimation(zoomIn)),
            transition('* => zoomInDown', useAnimation(zoomInDown)),
            transition('* => zoomInLeft', useAnimation(zoomInLeft)),
            transition('* => zoomInRight', useAnimation(zoomInRight)),
            transition('* => zoomInUp', useAnimation(zoomInUp)),
            transition('* => zoomOut', useAnimation(zoomOut)),
            transition('* => zoomOutDown', useAnimation(zoomOutDown)),
            transition('* => zoomOutLeft', useAnimation(zoomOutLeft)),
            transition('* => zoomOutRight', useAnimation(zoomOutRight)),
            transition('* => zoomOutUp', useAnimation(zoomOutUp))
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
