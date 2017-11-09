import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(300)
            ]),
            transition(':leave', [
                animate(300),
                style({
                    opacity: 0
                })
            ])
        ])
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

    public state: any;

    constructor() {
        //
    }

    public ngOnInit(): void {
        //
    }

    public ngOnDestroy(): void {
        //
    }

}
