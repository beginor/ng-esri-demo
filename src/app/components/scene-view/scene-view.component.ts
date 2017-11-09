import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import { MapService } from '../../services/map.service';

@Component({
    moduleId: module.id,
    selector: 'scene-view',
    templateUrl: './scene-view.component.html',
    styleUrls: ['./scene-view.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(300)
            ]),
            transition(':leave', [
                animate(300),
                style({
                    opacity: 0
                })
            ])
        ])
    ]
})
export class SceneViewComponent implements OnInit, OnDestroy {

    public state: any;

    @ViewChild('mapElement') public mapElement: ElementRef;

    private sceneView: __esri.SceneView;

    constructor(private mapService: MapService) {
    }

    public async ngOnInit() {
        try {
            await this.mapService.createSceneView(
                this.mapElement.nativeElement
            );
        }
        catch (ex) {
            console.error(ex);
        }
    }

    public ngOnDestroy() {
        // this.sceneView.destroy();
    }
}
