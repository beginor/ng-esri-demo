import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { EsriMapService } from 'ng-esri-service';

@Component({
    moduleId: module.id,
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
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
export class MapViewComponent implements OnInit, OnDestroy {

    public state: any;

    @ViewChild('mapElement') public mapElement: ElementRef;

    private mapView: __esri.MapView;

    constructor(
        private mapService: EsriMapService,
        private http: HttpClient
    ) {
    }

    public async ngOnInit(): Promise<void> {
        try {
            const basemap = await this.mapService.createBasemapFromId(
                'streets'
            );
            const map = await this.mapService.createMap({
                basemap: basemap.val
            });
            const wrapper = await this.mapService.createMapView({
                container: this.mapElement.nativeElement,
                map,
                zoom: 7,
                center: { longitude: 113.2, latitude: 23.4 }
            });
            this.mapView = wrapper.val;

            const arr = await this.http.get<any[]>(
                './assets/base-map.config.json'
            ).toPromise();

            const localSource = await this.mapService.createLocalSource(
                arr
            );
            const gallery = await this.mapService.createBasemapsGallery(
                {
                    view: this.mapView,
                    source: localSource
                }, {
                    expandTooltip: '底图'
                });
            this.mapView.ui.add(gallery, 'top-left');
        }
        // tslint:disable-next-line:one-line
        catch (ex) {
            console.error(ex);
        }
    }

    public ngOnDestroy(): void {
        // this.mapView.destroy();
    }

}
