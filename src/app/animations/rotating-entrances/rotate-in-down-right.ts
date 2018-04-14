import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const rotateInDownRight = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transformOrigin: 'right bottom',
            transform: 'rotate3d(0, 0, 1, 45deg)',
            opacity: 0
        }),
        style({
            offset: 1,
            transformOrigin: 'right bottom',
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
        })
    ]))
]);
