import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppSharedService {

    // tslint:disable-next-line: variable-name
    private _mv = new BehaviorSubject<__esri.SceneView | undefined>(undefined);

    public get mapView(): Observable<__esri.SceneView> {
        return this._mv.pipe(filter(m => !!m)) as Observable<__esri.SceneView>;
    }

    constructor() { }

    public setMapView(mapView: __esri.SceneView): void {
        this._mv.next(mapView);
    }
}
