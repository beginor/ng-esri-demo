import {
    animate, style, animation
} from '@angular/animations';

export const fadeIn = animation([
    style({ opacity: 0 }),
    animate('.3s')
]);
