import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import { MapService } from '../../services/map.service';

@Component({
    moduleId: module.id,
    selector: 'map-view',
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

    constructor(private mapService: MapService) {
    }

    public async ngOnInit() {
        try {
            await this.mapService.createMapView(
                this.mapElement.nativeElement
            );
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
