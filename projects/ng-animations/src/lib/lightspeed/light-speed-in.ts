import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const lightSpeedIn: AnimationReferenceMetadata = animation([
    style({
        animationTimingFunction: 'ease-out'
    }),
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
            opacity: 0
        }),
        style({
            offset: 0.6,
            transform: 'skewX(20deg)',
            opacity: 1
        }),
        style({
            offset: 0.8,
            transform: 'skewX(-5deg)',
            opacity: 1
        }),
        style({
            offset: 1,
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
        })
    ]))
]);
