import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

import SceneView = require('esri/views/SceneView');

import { MapService } from '../../services/map.service';

@Component({
    moduleId: module.id,
    selector: 'map3d',
    templateUrl: './map3d.component.html',
    styleUrls: ['./map3d.component.css'],
    providers: [MapService]
})
export class Map3dComponent implements OnInit, OnDestroy {

    @ViewChild('mapElement') private mapElement: ElementRef;
    
    private sceneView: SceneView;

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
        this.sceneView = new SceneView({
            container: this.mapElement.nativeElement,
            map: this.mapService.map,
            scale: 50000000,
            center: [113, 23.5]
        });
    }

    ngOnDestroy() {
        this.sceneView.destroy();
    }
}
