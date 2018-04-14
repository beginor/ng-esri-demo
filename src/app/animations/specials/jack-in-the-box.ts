import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const jackInTheBox = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            opacity: 0,
            transformOrigin: 'center bottom',
            transform: 'scale(0.1) rotate(30deg)'
        }),
        style({
            offset: 0.5,
            opacity: 0.5,
            transform: 'rotate(-10deg)'
        }),
        style({
            offset: 0.7,
            opacity: 0.7,
            transform: 'rotate(3deg)'
        }),
        style({
            offset: 1,
            opacity: 1,
            transform: 'scale(1)'
        })
    ]))
]);
