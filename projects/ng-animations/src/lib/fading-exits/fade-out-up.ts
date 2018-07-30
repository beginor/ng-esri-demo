import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const fadeOutUp: AnimationReferenceMetadata = animation([
    animate('.75s', keyframes([
        style({
            offset: 0,
            opacity: 1
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)'
        })
    ]))
]);
