import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot
} from '@angular/router';

import { ILoadScriptOptions, loadModules, loadScript } from 'esri-loader';

@Injectable()
export class EsriLoaderGuard implements CanActivate {

    constructor(

    ) { }

    public async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        try {
            const options = this.getOptions();
            // load esri script and dojoConfig;
            await loadScript(options);
            // add cors enabled hosts
            const [config] = await loadModules(['esri/config']);
            const hosts = this.getCorsEnabledHosts();
            for (const host of hosts) {
                config.request.corsEnabledServers.push(host);
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
            url: 'https://js.arcgis.com/4.6/init.js',
            css: 'https://js.arcgis.com/4.6/esri/css/main.css',
            dojoConfig: {
                locale: 'zh-cn',
                async: true
            }
        };
    }

    private getCorsEnabledHosts() {
        return [
            { host: 'map.geoq.cn', withCredentials: true },
            { host: 'map.geoq.cn:443', withCredentials: true },
            '127.0.0.1:4200'
        ];
    }

}
