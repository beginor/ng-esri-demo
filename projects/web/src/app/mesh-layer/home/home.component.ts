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

    private layers: { [key: string]: __esri.IntegratedMeshLayer } = { };

    constructor(
        private map: MapService
    ) { }

    public ngOnInit(): void {
    }

    public showMeshLayer(slpk: string): void {
        this.map.sceneView.subscribe(async view => {
            let layer = this.layers[slpk];
            if (!layer) {
                layer = await arcgis.createIntegratedMeshLayer({
                    url: `http://localhost/slpk/${slpk}/`
                });
                view.map.add(layer);
                this.layers[slpk] = layer;
                await layer.when();
            }
            await arcgis.flyTo(view, layer.fullExtent);
        });
    }

}
