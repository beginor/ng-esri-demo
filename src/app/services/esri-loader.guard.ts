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

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.esriLoader.load({
                url: 'https://js.arcgis.com/4.5/init.js'
            }).then(() => {
                resolve(true);
            }).catch((err) => {
                console.error(err);
                resolve(false);
            });
        });
    }
}
