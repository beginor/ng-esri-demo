import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public message = 'Hello, Angular !';
    public count = 0;

    public ngOnInit(): void { }

    public onClick(): void {
        this.message = `You have clicked ${++this.count} times!`;
    }

}
