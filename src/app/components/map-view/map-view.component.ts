import {
    transition, trigger, useAnimation
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import * as esri from 'esri-service';

import { fadeIn } from '../../animations';

@Component({
    moduleId: module.id,
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', [
                useAnimation(fadeIn)
            ])
        ])
    ],
    host: {
        '[@state]': ''
    }
})
export class MapViewComponent implements OnInit, OnDestroy {

    public state: any;

    @ViewChild('mapElement') public mapElement: ElementRef;

    private mapView: __esri.MapView;

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
            const mapView = await esri.createMapView({
                container: this.mapElement.nativeElement,
                map,
                zoom: 7,
                center: { longitude: 113.2, latitude: 23.4 }
            });
            this.mapView = mapView;

            await mapView.when();

            const basemapProps = await this.http.get<any[]>(
                './assets/base-map.config.json'
            ).toPromise();

            const localSource = await esri.createLocalSource(
                basemapProps
            );
            const gallery = await esri.createBasemapsGallery(
                {
                    view: this.mapView,
                    source: localSource
                },
                {
                    expandTooltip: '底图'
                }
            );
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
