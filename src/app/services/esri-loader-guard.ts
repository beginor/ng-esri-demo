import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';

import {
    ILoadScriptOptions,
    loadModules,
    loadScript,
    isLoaded
} from 'esri-loader';

import { environment } from '../../environments/environment';

@Injectable()
export class EsriLoaderGuard implements CanLoad {

    public async canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Promise<boolean> {
        if (isLoaded()) {
            return true;
        }
        try {
            const options = this.getOptions();
            // load esri script and dojoConfig;
            await loadScript(options);
            // add cors enabled hosts
            const [config] = await loadModules(['esri/config']);
            for (const server of environment.trustedServers) {
                config.request.trustedServers.push(server);
            }
            return true;
        }
        catch (ex) {
            console.error(ex);
            return false;
        }
    }

    private getOptions(): ILoadScriptOptions {
        return {
            url: `${environment.arcgisJsApi}/init.js`,
            css: `${environment.arcgisJsApi}/esri/css/main.css`,
            dojoConfig: environment.dojoConfig
        };
    }

}
