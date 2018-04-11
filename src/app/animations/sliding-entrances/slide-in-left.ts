import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const slideInLeft = animation([
    animate('1s 0.1s', keyframes([
        style({
            offset: 0,
            transform: 'translate3d(-100%, 0, 0)',
            visibility: 'visible'
        }),
        style({
            offset: 1,
            transform: 'translate3d(0, 0, 0)'
        })
    ]))
]);
