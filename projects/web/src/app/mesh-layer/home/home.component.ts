import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as arcgis from 'esri-service';

import { AppSharedService } from 'app-shared';

@Component({
    selector: 'app-mesh-layer-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    public slpks: Array<{ title: string }> = [];

    private layers: { [key: string]: __esri.IntegratedMeshLayer } = { };

    constructor(
        private appShared: AppSharedService,
        private http: HttpClient
    ) { }

    public async ngOnInit(): Promise<void> {
        this.slpks = await this.http.get<any[]>('assets/slpk-list.json')
            .toPromise();
    }

    public ngOnDestroy(): void {
        this.appShared.mapView.subscribe(view => {
            for (const slpk of this.slpks) {
                const layer = this.layers[slpk.title];
                view.map.remove(layer);
            }
        });
    }

    public showMeshLayer(slpk: any): void {
        this.appShared.mapView.subscribe(async view => {
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
