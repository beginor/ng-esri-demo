import {
    animate,
    style,
    transition,
    AnimationMetadata
} from '@angular/animations';

export function fadeIn(stateChangeExpr: string): AnimationMetadata {
    return transition(stateChangeExpr, [
        style({
            opacity: 0
        }),
        animate(300)
    ]);
}

export function fadeOut(stateChangeExpr: string): AnimationMetadata {
    return transition(stateChangeExpr, [
        animate(300),
        style({
            opacity: 0
        })
    ]);
}
