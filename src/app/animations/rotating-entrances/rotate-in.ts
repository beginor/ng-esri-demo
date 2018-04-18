import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const rotateIn = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transformOrigin: 'center',
            transform: 'rotate3d(0, 0, 1, -200deg)',
            opacity: 0
        }),
        style({
            offset: 1,
            transformOrigin: 'center',
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
        })
    ]))
]);
