import {
    Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy
} from '@angular/core';

import { AsyncSubject } from 'rxjs';

import * as arcgis from 'esri-service';

@Component({
    selector: 'app-scene-editor',
    templateUrl: './scene-editor.component.html',
    styleUrls: ['./scene-editor.component.scss']
})
export class SceneEditorComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('mapEl', { static: true })
    public mapEl: ElementRef<HTMLDivElement>;
    @ViewChild('editorEl', { static: true })
    public editorEl: ElementRef<HTMLIFrameElement>;

    private sceneView = new AsyncSubject<__esri.SceneView>();
    private initWebScene: __esri.WebSceneProperties = {
        basemap: 'streets',
        initialViewProperties: {
            viewingMode: 'global',
            viewpoint: { },
        }
    };

    private messageEventHandler: any;

    constructor() { }

    public ngOnInit(): void {
        this.messageEventHandler = this.receiveMessage.bind(this);
        window.addEventListener('message', this.messageEventHandler, false);
    }

    public async ngAfterViewInit(): Promise<void> {
        const props = this.cloneWebScene();
        const scene = await arcgis.createWebScene(props);
        arcgis.createSceneView({
            container: this.mapEl.nativeElement,
            map: scene
        }).then(sceneView => {
            this.sceneView.next(sceneView);
            this.sceneView.complete();
        });
    }

    public ngOnDestroy(): void {
        window.removeEventListener('message', this.messageEventHandler);
    }

    private cloneWebScene(): __esri.WebSceneProperties {
        const text = JSON.stringify(this.initWebScene);
        return JSON.parse(text);
    }

    private receiveMessage(e: MessageEvent): void {
        // message should come from iframe.
        if (!this.editorEl.nativeElement.src.startsWith(e.origin)) {
            return;
        }
        this.sceneView.subscribe(async view => {
            try {
                const webSceneProps = JSON.parse(e.data);
                this.initWebScene = webSceneProps;
                const props = this.cloneWebScene();
                const webscene = await arcgis.createWebScene(props);
                view.map = webscene;
            }
            catch (ex) {
                alert('配置错误！');
                console.error(ex);
            }
        });
    }

    public loadCode(): void {
        this.editorEl.nativeElement.contentWindow.postMessage({
            language: 'json',
            value: JSON.stringify(this.initWebScene, null, '  ')
        }, '*');
    }

    public updateView(): void {
        this.editorEl.nativeElement.contentWindow.postMessage('getValue', '*');
    }

    public updateScene(): void {
        this.sceneView.subscribe(view => {
            const viewingMode = view.viewingMode;
            this.initWebScene.initialViewProperties.viewingMode = viewingMode;
            this.initWebScene.initialViewProperties.viewpoint = view.viewpoint;
            this.loadCode();
        });
    }

}
