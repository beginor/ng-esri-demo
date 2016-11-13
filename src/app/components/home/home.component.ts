import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    message = 'Hello, Angular 2 !';

    onClick() {
        this.message = 'You have clicked!';
    }

}