import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

import * as MapView from 'esri/views/MapView';

import { MapService } from '../../services/map.service';

@Component({
    moduleId: module.id,
    selector: 'map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnDestroy {

    @ViewChild('mapElement') mapElement: ElementRef;
    
    mapView: MapView;

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
        this.mapView = new MapView({
            container: this.mapElement.nativeElement,
            map: this.mapService.map,
            zoom: 7,
            center: [113, 23.5]
        });
    }

    ngOnDestroy() {
        //this.mapView.destroy();
    }
}
