import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as arcgis from 'esri-service';

import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-mesh-layer-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public slpks = [];

    private layers: { [key: string]: __esri.IntegratedMeshLayer } = { };

    constructor(
        private map: MapService,
        private http: HttpClient
    ) { }

    public async ngOnInit(): Promise<void> {
        this.slpks = await this.http.get<any[]>('assets/slpk-list.json')
            .toPromise();
    }

    public showMeshLayer(slpk: any): void {
        this.map.sceneView.subscribe(async view => {
            let layer = this.layers[slpk.title];
            if (!layer) {
                layer = await arcgis.createIntegratedMeshLayer({
                    url: slpk.url,
                    title: slpk.title
                });
                view.map.add(layer);
                this.layers[slpk.title] = layer;
                await layer.when();
            }
            await arcgis.flyTo(view, layer.fullExtent);
        });
    }

}
