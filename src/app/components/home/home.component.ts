import { animate, transition, trigger, state, style } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
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

	state: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
