import { Component } from '@angular/core';

import Map = require('esri/Map');
import MapView = require('esri/views/MapView');

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
        let map = new Map({});
    }

}
