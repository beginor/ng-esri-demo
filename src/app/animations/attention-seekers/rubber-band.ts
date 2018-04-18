import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const rubberBand = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'scale3d(1, 1, 1)'
        }),
        style({
            offset: 0.3,
            transform: 'scale3d(1.25, 0.75, 1)'
        }),
        style({
            offset: 0.4,
            transform: 'scale3d(0.75, 1.25, 1)'
        }),
        style({
            offset: 0.5,
            transform: 'scale3d(1.15, 0.85, 1)'
        }),
        style({
            offset: 0.65,
            transform: 'scale3d(0.95, 1.05, 1)'
        }),
        style({
            offset: 0.75,
            transform: 'scale3d(1.05, 0.95, 1)'
        }),
        style({
            offset: 1,
            transform: 'scale3d(1, 1, 1)'
        })
    ]))
]);
