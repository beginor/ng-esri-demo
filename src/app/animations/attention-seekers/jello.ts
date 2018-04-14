import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const jello = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'translate3d(0, 0, 0)',
        }),
        style({
            offset: 0.111,
            transform: 'translate3d(0, 0, 0)',
        }),
        style({
            offset: 0.222,
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
        }),
        style({
            offset: 0.333,
            transform: 'skewX(6.25deg) skewY(6.25deg)',
        }),
        style({
            offset: 0.444,
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
        }),
        style({
            offset: 0.555,
            transform: 'skewX(1.5625deg) skewY(1.5625deg)',
        }),
        style({
            offset: 0.666,
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
        }),
        style({
            offset: 0.777,
            transform: 'skewX(0.390625deg) skewY(0.390625deg)',
        }),
        style({
            offset: 0.888,
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
        }),
        style({
            offset: 1,
            transform: 'translate3d(0, 0, 0)',
        })
    ]))
]);
