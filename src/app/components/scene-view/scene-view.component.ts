import {
    transition, trigger, useAnimation
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import * as esri from 'esri-service';

import { fadeIn, fadeOut } from '../../animations';

@Component({
    moduleId: module.id,
    selector: 'app-scene-view',
    templateUrl: './scene-view.component.html',
    styleUrls: ['./scene-view.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', useAnimation(fadeIn))
        ])
    ],
    host: {
        '[@state]': ''
    }
})
export class SceneViewComponent implements OnInit, OnDestroy {

    public state: any;

    @ViewChild('mapElement') public mapElement: ElementRef;

    private sceneView: __esri.SceneView;

    constructor(
        private http: HttpClient
    ) {
    }

    public async ngOnInit() {
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

            const basemapProps = await this.http.get<any[]>(
                './assets/base-map.config.json'
            ).toPromise();

            const localSource = await esri.createLocalSource(
                basemapProps
            );
            const gallery = await esri.createBasemapsGallery(
                {
                    view: this.sceneView,
                    source: localSource
                },
                {
                    expandTooltip: '底图'
                }
            );
            this.sceneView.ui.add(gallery, 'top-left');
        }
        catch (ex) {
            console.error(ex);
        }
    }

    public ngOnDestroy() {
        // this.sceneView.destroy();
    }
}
