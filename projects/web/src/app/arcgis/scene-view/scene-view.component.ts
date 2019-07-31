import {
    transition, trigger, useAnimation
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import * as esri from 'esri-service';

@Component({
    selector: 'app-scene-view',
    templateUrl: './scene-view.component.html',
    styleUrls: ['./scene-view.component.scss']
})
export class SceneViewComponent implements OnInit, OnDestroy {

    public state: any;

    @ViewChild('mapElement', { static: true }) public mapElement: ElementRef;

    private sceneView: __esri.SceneView;

    constructor(
        private http: HttpClient
    ) {
    }

    public async ngOnInit(): Promise<void> {
        try {
            const map = await esri.createMap({
                basemap: 'satellite',
                ground: 'world-elevation'
            });
            const sceneView = await esri.createSceneView({
                container: this.mapElement.nativeElement,
                map,
                zoom: 7,
                center: { longitude: 113.2, latitude: 23.4 },
                viewingMode: 'local'
            });
            this.sceneView = sceneView;
            await sceneView.when();
        }
        catch (ex) {
            console.error(ex);
        }
    }

    public ngOnDestroy(): void {
        if (!!this.sceneView) {
            this.sceneView.destroy();
        }
    }
}
