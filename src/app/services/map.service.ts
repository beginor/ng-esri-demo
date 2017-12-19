import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EsriLoaderService } from 'angular-esri-loader';

@Injectable()
export class MapService {

    private mapInstance: __esri.Map;

    constructor(
        private esriLoader: EsriLoaderService,
        private http: HttpClient
    ) {
        //
    }

    public async setup(): Promise<EsriLoaderService> {
        await this.esriLoader.load({
            url: 'https://js.arcgis.com/4.6/init.js'
        });
        return this.esriLoader;
    }

    public async getMap(): Promise<__esri.Map> {
        if (!!this.mapInstance) {
            return this.mapInstance;
        }
        const [Map, Basemap] = await this.esriLoader.loadModules([
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
        const theMap = await this.getMap();
        const [MapView] = await this.esriLoader.loadModules([
            'esri/views/MapView'
        ]);
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
        const theMap = await this.getMap();
        const [SceneView] = await this.esriLoader.loadModules([
            'esri/views/SceneView'
        ]);
        const opts: __esri.SceneViewProperties = {
            container: element,
            map: theMap,
            center: { longitude: 113, latitude: 23.5 }
        };
        const sceneView: __esri.SceneView = new SceneView(opts);
        return { val: sceneView };
    }

    public async createLocalSource(
        url: string
    ): Promise<__esri.LocalBasemapsSource> {
        // tslint:disable-next-line:max-line-length
        const props = await this.http.get<__esri.BasemapProperties[]>(url).toPromise();
        const basemapArr: __esri.Basemap[] = [];
        // tslint:disable-next-line:max-line-length
        const [Basemap, TileLayer, LocalBasemapsSource] = await this.esriLoader.loadModules([
            'esri/Basemap',
            'esri/layers/TileLayer',
            'esri/widgets/BasemapGallery/support/LocalBasemapsSource'
        ]);
        //
        for (const prop of props) {
            let baseLayers = prop.baseLayers as any[];
            baseLayers = baseLayers.map(
                opt => new TileLayer(opt)
            );
            prop.baseLayers = baseLayers;
            const basemap = new Basemap(prop);
            basemapArr.push(basemap);
        }
        const localSource = new LocalBasemapsSource({
            basemaps: basemapArr
        });
        return localSource;
    }

    public async createBasemapsGallery(
        props: __esri.BasemapGalleryProperties
    ): Promise<__esri.Expand> {
        const [Expand, BasemapGallery] = await this.esriLoader.loadModules([
            'esri/widgets/Expand',
            'esri/widgets/BasemapGallery'
        ]);
        props.container = document.createElement('div');
        const gallery = new BasemapGallery(props);
        const expand = new Expand({
            view: props.view,
            content: gallery.get('domNode')
        });
        return expand;
    }

}

export interface EsriWrapper<T> {

    val: T;

}
