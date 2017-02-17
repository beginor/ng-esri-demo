import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

import Map = require('esri/Map');
import MapView = require('esri/views/MapView');

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

    @ViewChild('mapElement') private mapElement: ElementRef;
    
    private mapView: MapView;

    constructor() {
    }

    ngAfterViewInit() {
        let map = new Map({
            basemap: 'streets'
        });
        this.mapView = new MapView({
            container: this.mapElement.nativeElement,
            map: map
        })
    }

}
