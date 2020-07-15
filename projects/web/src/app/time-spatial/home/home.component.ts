import { Component, OnInit, OnDestroy } from '@angular/core';

import * as arcgis from 'esri-service';

import { AppSharedService } from 'app-shared';

@Component({
    selector: 'app-time-spatial-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private layer!: __esri.FeatureLayer;
    private legend!: __esri.Expand;

    constructor(
        private appShared: AppSharedService
    ) { }

    public ngOnInit(): void {
        this.appShared.mapView.subscribe(async view => {
            await this.initLegend(view);
            await this.initLayer(view);
        });
    }

    public ngOnDestroy(): void {
        this.appShared.mapView.subscribe(view => {
            if (!!this.layer) {
                view.map.remove(this.layer);
                view.ui.remove(this.legend);
            }
        });
    }

    private async initLegend(view: __esri.SceneView): Promise<void> {
        this.legend = await arcgis.createExpandableLegend(
            {
                view: view
            },
            {
                view: view,
                expanded: true
            }
        );
        view.ui.add(this.legend, 'bottom-right');
    }

    private async initLayer(view: __esri.SceneView): Promise<void> {
        const props: __esri.FeatureLayerProperties = {
            id: 'water-section-his',
            title: '水质断面',
            // tslint:disable-next-line: max-line-length
            url: 'http://agsdb.gdepb.gov.cn/eco-env-gis/rest/services/wgs84_gd_env_water_section_geo_his_data/MapServer/0',
            // tslint:disable-next-line: max-line-length
            definitionExpression: `business_id = '69e0118b-7df7-4385-8768-390c53d32ead' and stat_time = (select max(stat_time) from water.water_section_geo_his_data)`,
            outFields: [
                'objectid', 'section_code', 'section_name', 'area_id',
                'area_name', 'longitude', 'latitude',
                'stat_time', 'business_id', 'is_ok', 'wq_level_id',
                'wq_level_name', 'wq_index'
            ]
        };
        this.layer = await arcgis.createFeatureLayer(props);
        await this.layer.load();
        view.map.add(this.layer);
    }

    public setLevelRenderer(): void {
        if (!this.layer) {
            return;
        }
        const renderer = {
            type: 'unique-value',
            field: 'wq_level_id',
            defaultSymbol: {
                type: 'simple-marker',
                style: 'circle',
                color: '#CCCCCC',
                size: 4,
                outline: { color: '#000000', width: 1 }
            },
            uniqueValueInfos: [
                {
                    value: 1,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#016c59',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                },
                {
                    value: 2,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#1c9099',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                },
                {
                    value: 3,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#67a9cf',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                },
                {
                    value: 4,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#a6bddb',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                },
                {
                    value: 5,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#d0d1e6',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                },
                {
                    value: 6,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#f6eff7',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                }
            ]
        };
        this.layer.renderer = renderer as any;
    }

    public setIsOkRenderer(): void {
        if (!this.layer) {
            return;
        }
        const renderer = {
            type: 'unique-value',
            field: 'is_ok',
            defaultSymbol: {
                type: 'simple-marker',
                style: 'circle',
                color: '#CCCCCC',
                size: 4,
                outline: { color: '#000000', width: 1 }
            },
            uniqueValueInfos: [
                {
                    value: true,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#00ff00',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                },
                {
                    value: false,
                    symbol: {
                        type: 'simple-marker',
                        style: 'circle',
                        color: '#ff0000',
                        size: 12,
                        outline: { color: '#000000', width: 1 }
                    }
                }
            ]
        };
        this.layer.renderer = renderer as any;
    }

}
