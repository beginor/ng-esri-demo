import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import * as MapView from 'esri/views/MapView';

import { MapService } from '../../services/map.service';

@Component({
    moduleId: module.id,
    selector: 'map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnDestroy {

    @ViewChild('mapElement') public mapElement: ElementRef;

    private mapView: MapView;

    constructor(private mapService: MapService) {
    }

    public ngOnInit(): void {
        this.mapView = new MapView({
            container: this.mapElement.nativeElement,
            map: this.mapService.map,
            zoom: 7,
            center: { x: 113, y: 23.5 }
        });
    }

    public ngOnDestroy(): void {
        // this.mapView.destroy();
    }

}
