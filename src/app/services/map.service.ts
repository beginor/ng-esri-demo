import { Injectable } from '@angular/core';

import * as Map from 'esri/Map';
import * as Basemap from 'esri/Basemap';

@Injectable()
export class MapService {

    private _map: Map;

    get map() {
        if (!this._map) {
            this._map = new Map({ basemap: Basemap.fromId('streets') });
        }
        return this._map;
    }
}
