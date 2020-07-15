import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AsyncSubject } from 'rxjs';

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
        private http: HttpClient,
        @Inject('ArcGisJsApiOptions')
        private options: ArcGisJsApiOptions
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
        await loadScript(this.options);
        // add cors enabled hosts
        const [config] = await loadModules(['esri/config']);
        for (const server of this.options.trustedServers) {
            config.request.trustedServers.push(server);
        }
    }
}

export interface ArcGisJsApiOptions extends ILoadScriptOptions {
    trustedServers: string[];
}
