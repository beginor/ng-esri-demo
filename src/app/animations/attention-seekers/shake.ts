import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const shake = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'translate3d(0, 0, 0)'
        }),
        style({
            offset: 0.1,
            transform: 'translate3d(-10px, 0, 0)'
        }),
        style({
            offset: 0.2,
            transform: 'translate3d(10px, 0, 0)'
        }),
        style({
            offset: 0.3,
            transform: 'translate3d(-10px, 0, 0)'
        }),
        style({
            offset: 0.4,
            transform: 'translate3d(10px, 0, 0)'
        }),
        style({
            offset: 0.5,
            transform: 'translate3d(-10px, 0, 0)'
        }),
        style({
            offset: 0.6,
            transform: 'translate3d(10px, 0, 0)'
        }),
        style({
            offset: 0.7,
            transform: 'translate3d(-10px, 0, 0)'
        }),
        style({
            offset: 0.8,
            transform: 'translate3d(10px, 0, 0)'
        }),
        style({
            offset: 0.9,
            transform: 'translate3d(-10px, 0, 0)'
        }),
        style({
            offset: 1,
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
