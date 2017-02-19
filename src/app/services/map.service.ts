import { Injectable } from '@angular/core';

import * as Map from 'esri/Map';

@Injectable()
export class MapService {

    private _map: Map;

    get map() {
        if (!this._map) {
            this._map = new Map({ basemap: 'streets' });
        }
        return this._map;
    }
}
