import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
    loadModules, loadScript, ILoadScriptOptions, isLoaded
} from 'esri-loader';
import * as esri from 'esri-service';

@Injectable({
    providedIn: 'root'
})
export class MapService {

    private props: __esri.WebSceneProperties | undefined = undefined;

    constructor(
        private http: HttpClient
    ) { }

    public async loadWebSceneProperties(): Promise<__esri.WebSceneProperties> {
        if (!this.props) {
            const url = 'assets/default-web-scene.json';
            this.props = await this.http.get<__esri.WebSceneProperties>(url)
                .toPromise();
        }
        return this.props;
    }

    public async loadWebScene(): Promise<__esri.WebScene> {
        const props = await this.loadWebSceneProperties();
        const scene = await esri.createWebScene(props);
        return scene;
    }

    public async initArcGisJsApi(): Promise<void> {
        if (isLoaded()) {
            return;
        }
        // load esri script and dojoConfig;
        const arcgisJsApi = (window as any)['arcgisJsApi'] as string;
        await loadScript({
            url: `${arcgisJsApi}/init.js`,
            css: `${arcgisJsApi}/esri/css/main.css`,
        });
    }
}
