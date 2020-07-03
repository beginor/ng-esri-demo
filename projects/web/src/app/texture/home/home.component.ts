import { Component, OnInit, OnDestroy } from '@angular/core';

import * as arcgis from 'esri-service';

import { MapService } from '../../services/map.service';
import { loadModules } from 'esri-loader';

@Component({
    selector: 'app-texture-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private textureRenderer: arcgis.TextureRenderer;
    private textures = [
        './assets/viz/vis_202004280000.jpg',
        './assets/viz/vis_202004280010.jpg',
        './assets/viz/vis_202004280020.jpg',
        './assets/viz/vis_202004280030.jpg',
        './assets/viz/vis_202004280040.jpg',
        './assets/viz/vis_202004280050.jpg',
        './assets/viz/vis_202004280100.jpg',
        './assets/viz/vis_202004280130.jpg',
        './assets/viz/vis_202004280210.jpg',
        './assets/viz/vis_202004280230.jpg',
        './assets/viz/vis_202004280300.jpg',
        './assets/viz/vis_202004280320.jpg',
        './assets/viz/vis_202004280330.jpg',
        './assets/viz/vis_202004280340.jpg',
        './assets/viz/vis_202004280350.jpg',
        './assets/viz/vis_202004280400.jpg',
        './assets/viz/vis_202004280410.jpg',
        './assets/viz/vis_202004280420.jpg',
        './assets/viz/vis_202004280430.jpg',
        './assets/viz/vis_202004280440.jpg',
        './assets/viz/vis_202004280450.jpg',
        './assets/viz/vis_202004280500.jpg'
    ];
    private playing: boolean;

    constructor(
        private map: MapService
    ) { }

    public ngOnInit(): void { }

    public ngOnDestroy(): void {
        this.removeTextureRenderer();
    }

    public addTextureRenderer(): void {
        if (!!this.textureRenderer) {
            return;
        }

        this.map.sceneView.subscribe(async view => {
            const [externalRenderers] = await loadModules<[
                __esri.externalRenderers
            ]>([
                'esri/views/3d/externalRenderers'
            ]);
            const renderer = await arcgis.createTextureRenderer({
                view,
                extent: { xmin: 70.0, xmax: 150.0, ymin: 1.0, ymax: 56.0 },
                elevation: 2000,
                textureUrl: this.textures[0],
                refreshInterval: 0,
                opacity: 1.0,
                wireframe: false
            });
            externalRenderers.add(view, renderer);
            this.textureRenderer = renderer;
        });
    }

    public removeTextureRenderer(): void {
        this.playing = false;
        this.map.sceneView.subscribe(async view => {
            if (!!this.textureRenderer) {
                const [externalRenderers] = await loadModules<[
                    __esri.externalRenderers
                ]>([
                    'esri/views/3d/externalRenderers'
                ]);
                externalRenderers.remove(view, this.textureRenderer);
                this.textureRenderer = null;
            }
        });
    }

    public async play(): Promise<void> {
        this.playing = true;
        function wait(ms: number): Promise<void> {
            return new Promise<void>((resolve, reject) => {
                setTimeout(() => { resolve(); }, ms);
            });
        }
        let i = 0;
        while (this.playing) {
            await wait(100);
            if (!this.play) {
                return;
            }
            await this.textureRenderer.loadTexture(this.textures[i]);
            i += 1;
            i = i % this.textures.length;
            // console.log(i);
        }
    }

}
