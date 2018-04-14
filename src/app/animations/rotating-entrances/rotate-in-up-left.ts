import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const rotateInUpLeft = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transformOrigin: 'left bottom',
            transform: 'rotate3d(0, 0, 1, 45deg)',
            opacity: 0
        }),
        style({
            offset: 1,
            transformOrigin: 'left bottom',
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
        })
    ]))
]);
