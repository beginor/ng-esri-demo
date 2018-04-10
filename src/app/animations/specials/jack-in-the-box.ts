import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const jackInTheBox = animation([
    animate('1s 0.1s', keyframes([
        style({
            offset: 0,
            opacity: 0,
            transform: 'scale(0.1) rotate(30deg)',
            transformOrigin: 'center bottom'
        }),
        style({
            offset: 0.5,
            transform: 'rotate(-10deg)'
        }),
        style({
            offset: 0.7,
            transform: 'rotate(3deg)'
        }),
        style({
            offset: 1,
            opacity: 1,
            transform: 'scale(1)'
        })
    ]))
]);
