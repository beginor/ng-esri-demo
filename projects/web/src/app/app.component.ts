import {
    Component, OnInit, ViewChild, ElementRef, AfterViewInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    trigger, animate, style, state, transition, AnimationEvent
} from '@angular/animations';


import * as arcgis from 'esri-service';

import { MapService } from './services/map.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('state', [
            state('show', style({ left: '0px' })),
            state('hide', style({ left: '-360px' })),
            transition('show => hide', animate('.3s ease-in-out')),
            transition('hide => show', animate('.3s ease-in-out'))
        ])
    ]
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild('map', { static: true})
    public mapRef: ElementRef<HTMLDivElement>;

    public state = 'show';

    constructor(
        private http: HttpClient,
        private map: MapService
    ) { }

    public ngOnInit(): void { }

    public async ngAfterViewInit(): Promise<void> {
        await this.map.initArcGisJsApi();
        const webscene = await this.map.loadWebScene();
        const view = await this.createSceneView(webscene);
        await view.when();
        this.map.sceneView.next(view);
        this.map.sceneView.complete();
    }

    public toggleState(e: Event): void {
        e.preventDefault();
        e.stopPropagation();
        this.state = (this.state === 'show') ? 'hide' : 'show';
    }

    public getToggleIconClass(): string {
        let classeName = 'fas fa-chevron-';
        if (this.state === 'show') {
            classeName += 'left';
        }
        else {
            classeName += 'right';
        }
        return classeName;
    }

    private async createSceneView(
        scene: __esri.WebScene
    ): Promise<__esri.SceneView> {
        const view = await arcgis.createSceneView({
            container: this.mapRef.nativeElement,
            map: scene
        });
        view.ui.move('zoom', 'top-right');
        view.ui.move('navigation-toggle', 'top-right');
        view.ui.move('compass', 'top-right');
        window['_sceneview'] = view;
        return view;
    }

}
