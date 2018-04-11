import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const zoomOut = animation([
    animate('1s 0.1s', keyframes([
        style({
            offset: 0,
            opacity: 1
        }),
        style({
            offset: 0.5,
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
        }),
        style({
            offset: 1,
            opacity: 0
        })
    ]))
]);
