import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'dist/components/home/home.component.html'
})
export class HomeComponent {

    message = 'Hello, Angular 2 !';

    onClick() {
        this.message = 'You have clicked!';
    }

}