import { animate, style, transition } from '@angular/animations';

export function fadeIn() {
    return transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300)
    ]);
}

export function fadeOut() {
    return transition(':leave', [
        animate(300),
        style({
            opacity: 0
        })
    ]);
}
