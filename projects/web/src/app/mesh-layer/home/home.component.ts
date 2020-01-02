import { Component, OnInit } from '@angular/core';

import * as arcgis from 'esri-service';

import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public slpks = ['大学城', '蕉门', '石井河口'];

    private layer: __esri.IntegratedMeshLayer;

    constructor(
        private map: MapService
    ) { }

    public ngOnInit(): void {
    }

    public showMeshLayer(slpk: string): void {
        this.map.sceneView.subscribe(async view => {
            // if (!!this.layer) {
            //     view.map.remove(this.layer);
            //     this.layer = null;
            // }
            const layer = await arcgis.createIntegratedMeshLayer({
                url: `http://localhost/slpk/${slpk}/`
            });
            // this.layer = layer;
            view.map.add(layer);
            await layer.when();
            await view.goTo(
                {
                    target: layer.fullExtent,
                    zoom: 17,
                    heading: 0,
                    tilt: 45
                },
                { animate: true, easing: 'in-out-cubic' }
            );
            if (!!this.layer) {
                view.map.remove(this.layer);
                this.layer = null;
            }
            this.layer = layer;
        });
    }

}
