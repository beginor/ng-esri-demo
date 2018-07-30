import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const fadeIn: AnimationReferenceMetadata = animation([
    animate('.75s', keyframes([
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
