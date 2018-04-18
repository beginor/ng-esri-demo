import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot
} from '@angular/router';

import { ILoadScriptOptions, loadModules, loadScript } from 'esri-loader';

import { environment } from '../../environments/environment';

@Injectable()
export class EsriLoaderGuard implements CanActivate {

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
            this.getCorsEnabledHosts().forEach(host => {
                config.request.corsEnabledServers.push(host);
            });
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

    private getCorsEnabledHosts(): any[] {
        return environment.corsEnabledHosts;
    }

}
