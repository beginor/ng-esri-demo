import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const pulse = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'scale3d(1.0, 1.0, 1.0)'
        }),
        style({
            offset: 0.5,
            transform: 'scale3d(1.05, 1.05, 1.05)'
        }),
        style({
            offset: 1,
            transform: 'scale3d(1.0, 1.0, 1.0)'
        })
    ]))
]);
