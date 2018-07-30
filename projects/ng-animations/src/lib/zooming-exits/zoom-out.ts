import {
    animate, style, keyframes, animation, AnimationReferenceMetadata
} from '@angular/animations';

export const zoomOut: AnimationReferenceMetadata = animation([
    animate('.75s', keyframes([
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
