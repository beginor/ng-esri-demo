import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot
} from '@angular/router';

import { EsriLoaderService } from 'angular-esri-loader';

@Injectable()
export class EsriLoaderGuard implements CanActivate {
    constructor(
        private esriLoader: EsriLoaderService
    ) { }

    public async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        try {
            await this.esriLoader.load({
                url: 'https://js.arcgis.com/4.4/init.js'
            });
            const [config] = await this.esriLoader.loadModules([
                'esri/config'
            ]);
            config.request.corsEnabledServers.push(
                'map.geoq.cn'
            );
            return true;
        }
        catch (ex) {
            console.error(ex);
            return false;
        }
    }
}
