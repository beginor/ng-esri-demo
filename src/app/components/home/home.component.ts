import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    message: string = 'Hello, Angular 2 !';
    count: number = 0;

    onClick() {
        this.message = `You have clicked ${++this.count} times!`;
    }

}
