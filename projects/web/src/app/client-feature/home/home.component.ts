import { Component, OnInit } from '@angular/core';

import { loadModules } from 'esri-loader';
import * as arcgis from 'esri-service';

import { AppSharedService } from 'app-shared';

@Component({
    selector: 'app-client-feature-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public serviceUrl = 'https://it.gdeei.cn/gis/rest/services/wgs84_gd_env_water_section_geo_his_data/MapServer/0'
    public where = 'business_id = \'69e0118b-7df7-4385-8768-390c53d32ead\' and stat_time = \'2020-03-01\'';

    private layer!: __esri.FeatureLayer;

    constructor(
        private appShared: AppSharedService
    ) { }

    public ngOnInit(): void {
    }

    public async addLayerClient(): Promise<void> {
        if (!this.serviceUrl) {
            alert('Invalid serviceUrl');
            return;
        }
        const featureSet = await arcgis.executeQuery(
            this.serviceUrl,
            {
                where: this.where,
                returnGeometry: true,
                outFields: [
                    'objectid',
                    'section_code',
                    'section_name',
                    'area_id',
                    'longitude',
                    'latitude',
                    'area_name',
                    'tags',
                    'basin_ids',
                    'basin_names',
                    'unit_ids',
                    'unit_names',
                    'stat_time',
                    'business_id',
                    'is_ok',
                    'wq_level_id',
                    'wq_level_name',
                    'wq_aim_id',
                    'wq_aim_name',
                    'wq_index',
                    'wq_index_avg',
                    'classify_items',
                    'water_body_name'
                ],
            }
        );
        const layer = await arcgis.createFeatureLayer({
            fields: featureSet.fields,
            source: featureSet.features,
            geometryType: 'point',
            objectIdField: 'objectid',
            spatialReference: featureSet.spatialReference,
            renderer: {
                type: 'simple',
                symbol: {
                    type: 'point-3d',
                    callout: {
                        size: 1,
                        type: 'line',
                        color: '#1AAAA0',
                        border: {
                            size: 0.5,
                            color: '#FFFFFF'
                        }
                    },
                    symbolLayers: [
                        {
                            size: 32,
                            type: 'icon',
                            anchor: 'bottom',
                            border: {
                                size: 1,
                                color: '#FFFFFF'
                            },
                            resource: {
                                href: 'https://app.gdeei.cn/arcgis-js-api/map-icons/assets/scenes/water-section-nation-1_1.png'
                            }
                        }
                    ],
                    verticalOffset: {
                        screenLength: 50,
                        maxWorldLength: 300,
                        minWorldLength: 1
                    }
                }
            } as any,
            labelingInfo: [
                {
                    symbol: {
                        type: 'label-3d',
                        symbolLayers: [
                            {
                                halo: {
                                    size: 1.5,
                                    color: [0, 0, 0, 0.6]
                                },
                                size: 12,
                                type: 'text',
                                material: {
                                    color: [ 200, 255, 255]
                                }
                            }
                        ]
                    },
                    labelPlacement: 'above-center',
                    useCodedValues: false,
                    labelExpressionInfo: {
                        expression: '$feature.section_name'
                    }
                }
            ] as any[],
            labelsVisible: true
        });
        this.appShared.mapView.subscribe(view => {
            view.map.add(layer);
            this.layer = layer;
        });
    }

    public async addLayerServer(): Promise<void> {
        const layer = await arcgis.createFeatureLayer({
            url: this.serviceUrl,
            definitionExpression: this.where,
            renderer: {
                type: 'simple',
                symbol: {
                    type: 'point-3d',
                    callout: {
                        size: 1,
                        type: 'line',
                        color: '#1AAAA0',
                        border: {
                            size: 0.5,
                            color: '#FFFFFF'
                        }
                    },
                    symbolLayers: [
                        {
                            size: 32,
                            type: 'icon',
                            anchor: 'bottom',
                            border: {
                                size: 1,
                                color: '#FFFFFF'
                            },
                            resource: {
                                href: 'https://app.gdeei.cn/arcgis-js-api/map-icons/assets/scenes/water-section-nation-1_1.png'
                            }
                        }
                    ],
                    verticalOffset: {
                        screenLength: 50,
                        maxWorldLength: 300,
                        minWorldLength: 1
                    }
                }
            } as any,
            labelingInfo: [
                {
                    symbol: {
                        type: 'label-3d',
                        symbolLayers: [
                            {
                                halo: {
                                    size: 1.5,
                                    color: [0, 0, 0, 0.6]
                                },
                                size: 12,
                                type: 'text',
                                material: {
                                    color: [ 200, 255, 255]
                                }
                            }
                        ]
                    },
                    labelPlacement: 'above-center',
                    useCodedValues: false,
                    labelExpressionInfo: {
                        expression: '$feature.section_name'
                    }
                }
            ] as any[],
            labelsVisible: true
        });
        this.appShared.mapView.subscribe(view => {
            view.map.add(layer);
            this.layer = layer;
        });
    }

    public removeLayer(): void {
        if (!this.layer) {
            return;
        }
        this.appShared.mapView.subscribe(view => {
            view.map.remove(this.layer);
        });
    }

}
