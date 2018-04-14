import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const bounceOut = animation([
    animate('.75s', keyframes([
        style({
            offset: 0.2,
            transform: 'scale3d(0.9, 0.9, 0.9)'
        }),
        style({
            offset: 0.5,
            opacity: 1,
            transform: 'scale3d(1.1, 1.1, 1.1)'
        }),
        style({
            offset: 0.55,
            opacity: 1,
            transform: 'scale3d(1.1, 1.1, 1.1)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
        })
    ]))
]);
