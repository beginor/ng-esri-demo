import { Injectable } from '@angular/core';

import { EsriLoaderService } from 'angular-esri-loader';

@Injectable()
export class MapService {

    private mapInstance: __esri.Map;

    constructor(private esriLoader: EsriLoaderService) {
        //
    }

    public async setup(): Promise<EsriLoaderService> {
        await this.esriLoader.load({
            url: 'https://js.arcgis.com/4.5/init.js'
        });
        return this.esriLoader;
    }

    public async getMap(): Promise<__esri.Map> {
        if (!!this.mapInstance) {
            return this.mapInstance;
        }
        const loader = await this.setup();
        const [Map, Basemap] = await loader.loadModules([
            'esri/Map',
            'esri/Basemap'
        ]);
        if (!this.mapInstance) {
            this.mapInstance = new Map(
                { basemap: Basemap.fromId('streets') }
            );
        }
        return this.mapInstance;
    }

    public async createMapView(
        element: HTMLDivElement
    ): Promise<EsriWrapper<__esri.MapView>> {
        const loader = await this.setup();
        const theMap = await this.getMap();
        const [MapView] = await loader.loadModules(['esri/views/MapView']);
        const opts: __esri.MapViewProperties = {
            container: element,
            map: theMap,
            center: { longitude: 113, latitude: 23.5 }
        };
        const mapView: __esri.MapView = new MapView(opts);
        return { val: mapView };
    }

    public async createSceneView(
        element: HTMLDivElement
    ): Promise<EsriWrapper<__esri.SceneView>> {
        const loader = await this.setup();
        const theMap = await this.getMap();
        const [SceneView] = await loader.loadModules(['esri/views/SceneView']);
        const opts: __esri.SceneViewProperties = {
            container: element,
            map: theMap,
            center: { longitude: 113, latitude: 23.5 }
        };
        const sceneView: __esri.SceneView = new SceneView(opts);
        return { val: sceneView };
    }

}

export interface EsriWrapper<T> {

    val: T;

}
