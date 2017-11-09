import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import * as SceneView from 'esri/views/SceneView';

import { MapService } from '../../services/map.service';

@Component({
    moduleId: module.id,
    selector: 'scene-view',
    templateUrl: './scene-view.component.html',
    styleUrls: ['./scene-view.component.css'],
    animations: [
        trigger('state', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(300)
            ]),
            transition(':leave', [
                animate(300),
                style({
                    opacity: 0
                })
            ])
        ])
    ]
})
export class SceneViewComponent implements OnInit, OnDestroy {

    public state: any;

    @ViewChild('mapElement') public mapElement: ElementRef;

    private sceneView: SceneView;

    constructor(private mapService: MapService) {
    }

    public ngOnInit() {
        this.sceneView = new SceneView({
            container: this.mapElement.nativeElement,
            map: this.mapService.map,
            scale: 50000000,
            center: { x: 113, y: 23.5 }
        });
    }

    public ngOnDestroy() {
        // this.sceneView.destroy();
    }
}
