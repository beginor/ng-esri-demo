import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animations';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('animation', [transition(':enter', useAnimation(fadeIn))])
    ],
    host: { '[@animation]': '' }
})
export class HomeComponent implements OnInit {

    public message = 'Hello, Angular !';
    public count = 0;

    public ngOnInit(): void { }

    public onClick(): void {
        this.message = `You have clicked ${++this.count} times!`;
    }

}
