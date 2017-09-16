import { Injectable } from '@angular/core';

import * as Basemap from 'esri/Basemap';
import * as Map from 'esri/Map';

@Injectable()
export class MapService {

    private mapInstance: Map;

    get map() {
        if (!this.mapInstance) {
            this.mapInstance = new Map({ basemap: Basemap.fromId('streets') });
        }
        return this.mapInstance;
    }
}
