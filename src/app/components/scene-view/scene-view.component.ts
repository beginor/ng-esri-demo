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
            const wrapper = await this.mapService.createSceneView(
                this.mapElement.nativeElement
            );
            this.sceneView = wrapper.val;
            const localSource = await this.mapService.createLocalSource(
                './assets/base-map.config.json'
            );
            const gallery = await this.mapService.createBasemapsGallery({
                view: this.sceneView,
                source: localSource
            });
            this.sceneView.ui.add(gallery, 'top-left');
        }
        catch (ex) {
            console.error(ex);
        }
    }

    public ngOnDestroy() {
        // this.sceneView.destroy();
    }
}
