import { Injectable } from '@angular/core';

import { AsyncSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MapService {

    public sceneView = new AsyncSubject<__esri.SceneView>();

    constructor() { }
}
