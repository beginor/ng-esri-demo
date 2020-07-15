import { Component, OnInit, OnDestroy } from '@angular/core';

import { loadModules } from 'esri-loader';
import * as arcgis from 'esri-service';

import { AppSharedService } from 'app-shared';

@Component({
    selector: 'app-plane-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor(
        private appShared: AppSharedService
    ) { }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.appShared.mapView.subscribe(view => {
            this.removeGraphic(view);
        });
    }

    public makePlane(): void {
        this.appShared.mapView.subscribe(async view => {
            this.removeGraphic(view);
            const radius = 6378137.0;
            const [Mesh, meshUtils, Extent] = await loadModules<[
                __esri.MeshConstructor,
                __esri.meshUtils,
                __esri.ExtentConstructor
            ]>([
                'esri/geometry/Mesh',
                'esri/geometry/support/meshUtils',
                'esri/geometry/Extent'
            ]);
            const point = await arcgis.createPoint({
                y: 28.5,
                x: 110,
                z: 1000,
                spatialReference: { wkid: 4326 }
            });
            const mesh = Mesh.createPlane(
                point,
                {
                    size: {
                        width: 10000,
                        height: 10000,
                    },
                    facing: 'north',
                    geographic: true,
                    material: {
                        color: 'red'
                    } as any
                }
            );
            // const plane = await meshUtils.createFromElevation(
            //     view.map.ground,
            //     new Extent({
            //         xmin: 110.0,
            //         xmax: 120.0,
            //         ymin: 15.0,
            //         ymax: 35.0,
            //         spatialReference: { wkid: 4326 }
            //     }),
            //     {
            //         // demResolution: 120
            //     }
            // );
            const graphic = await arcgis.createGraphic({
                geometry: mesh,
                attributes: { id: 'plane-graphic' },
                symbol: {
                    type: 'mesh-3d',
                    symbolLayers: [ { type: 'fill' } ]
                } as any
            });
            view.graphics.add(graphic);
            view.goTo(mesh);
        });
    }

    private removeGraphic(view: __esri.SceneView): void {
        const graphic = view.graphics.find(g => g.attributes['id'] === 'plane-graphic');
        if (!!graphic) {
            view.graphics.remove(graphic);
        }
    }

}
