import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import { EsriMapService } from 'ng-esri-service';
import { HttpClient } from '@angular/common/http';

@Component({
    moduleId: module.id,
    selector: 'app-scene-view',
    templateUrl: './scene-view.component.html',
    styleUrls: ['./scene-view.component.scss'],
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

    private sceneView: __esri.SceneView;

    constructor(
        private mapService: EsriMapService,
        private http: HttpClient
    ) {
    }

    public async ngOnInit() {
        try {
            const map = await this.mapService.createMap({
                basemap: 'satellite',
                ground: 'world-elevation'
            });
            const wrapper = await this.mapService.createSceneView({
                container: this.mapElement.nativeElement,
                map,
                zoom: 7,
                center: { longitude: 113.2, latitude: 23.4 },
                viewingMode: 'local'
            });
            this.sceneView = wrapper.val;

            await wrapper.val.when();

            const arr = await this.http.get<any[]>(
                './assets/base-map.config.json'
            ).toPromise();

            const localSource = await this.mapService.createLocalSource(
                arr
            );
            const gallery = await this.mapService.createBasemapsGallery(
                {
                    view: this.sceneView,
                    source: localSource
                }, {
                    expandTooltip: '底图'
                });
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
