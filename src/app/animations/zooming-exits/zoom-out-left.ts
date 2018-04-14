import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const zoomOutLeft = animation([
    animate('.75s', keyframes([
        style({
            offset: 0
        }),
        style({
            offset: 0.4,
            opacity: 1,
            transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
            transformOrigin: 'left center'
        })
    ]))
]);
