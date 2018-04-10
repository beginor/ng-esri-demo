import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const fadeIn = animation([
    animate('1s 0.1s', keyframes([
        style({
            offset: 0,
            opacity: 0
        }),
        style({
            offset: 1,
            opacity: 1
        })
    ]))
]);
