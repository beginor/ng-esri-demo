import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const slideOutRight = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            transform: 'translate3d(0, 0, 0)'
        }),
        style({
            offset: 1,
            visibility: 'hidden',
            transform: 'translate3d(100%, 0, 0)'
        })
    ]))
]);
