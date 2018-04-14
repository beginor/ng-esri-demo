import {
    animate, style, keyframes, animation
} from '@angular/animations';

export const headShake = animation([
    animate('.75s ease-in-out', keyframes([
        style({
            offset: 0,
            transform: 'translateX(0)'
        }),
        style({
            offset: 0.065,
            transform: 'translateX(-6px) rotateY(-9deg)'
        }),
        style({
            offset: 0.185,
            transform: 'translateX(5px) rotateY(7deg)'
        }),
        style({
            offset: 0.315,
            transform: 'translateX(-3px) rotateY(-5deg)'
        }),
        style({
            offset: 0.435,
            transform: 'translateX(2px) rotateY(3deg)'
        }),
        style({
            offset: 0.5,
            transform: 'translateX(0)'
        })
    ]))
]);
