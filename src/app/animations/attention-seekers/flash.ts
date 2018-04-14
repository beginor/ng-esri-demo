import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const flash = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            opacity: 1
        }),
        style({
            offset: 0.25,
            opacity: 0
        }),
        style({
            offset: 0.5,
            opacity: 1
        }),
        style({
            offset: 0.75,
            opacity: 0
        }),
        style({
            offset: 1,
            opacity: 1
        })
    ]))
]);
