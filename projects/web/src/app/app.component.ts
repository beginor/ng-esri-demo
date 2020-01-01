import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    trigger, animate, style, state, transition, AnimationEvent
} from '@angular/animations';

import { loadModules, loadScript } from 'esri-loader';
import * as esri from 'esri-service';

import { environment } from '../environments/environment';
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
export class AppComponent implements OnInit {

    @ViewChild('map', { static: true})
    public mapRef: ElementRef<HTMLDivElement>;

    public state = 'show';

    constructor(
        private http: HttpClient,
        private map: MapService
    ) { }

    public async ngOnInit(): Promise<void> {
        await this.initArcGisJsApi();
        const webscene = await this.loadDefaultWebScene();
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
        const view = await esri.createSceneView({
            container: this.mapRef.nativeElement,
            map: scene
        });
        view.ui.move('zoom', 'top-right');
        view.ui.move('navigation-toggle', 'top-right');
        view.ui.move('compass', 'top-right');
        window['_sceneview'] = view;
        return view;
    }

    private async loadDefaultWebScene(): Promise<__esri.WebScene> {
        const url = 'assets/default-web-scene.json';
        const props = await this.http.get<__esri.WebSceneProperties>(url)
            .toPromise();
        const scene = await esri.createWebScene(props);
        return scene;
    }

    private async initArcGisJsApi(): Promise<void> {
        const options = {
            url: `${environment.arcgisJsApi}/init.js`,
            css: `${environment.arcgisJsApi}/esri/css/main.css`,
            dojoConfig: environment.dojoConfig
        };
        // load esri script and dojoConfig;
        await loadScript(options);
        // add cors enabled hosts
        const [config] = await loadModules(['esri/config']);
        for (const server of environment.trustedServers) {
            config.request.trustedServers.push(server);
        }
    }

}
