import { animate, transition, trigger, state, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
export class HomeComponent {

    message: string = 'Hello, Angular !';
    count: number = 0;

    state: any;

    onClick() {
        this.message = `You have clicked ${++this.count} times!`;
    }

}
