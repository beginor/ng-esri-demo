import {
    Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef
} from '@angular/core';
import * as arcgis from 'esri-service';

import { MapService } from '../../services/map.service';

@Component({
    selector: 'app-scene-editor-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    @ViewChild('editorEl', { static: true })
    public editorEl: ElementRef<HTMLIFrameElement>;

    private messageEventHandler: any;
    private webscene: __esri.WebSceneProperties;

    constructor(
        private map: MapService
    ) { }

    public ngOnInit(): void {
        this.messageEventHandler = this.receiveMessage.bind(this);
        addEventListener('message', this.messageEventHandler, false);
    }

    public ngOnDestroy(): void {
        removeEventListener('message', this.messageEventHandler);
    }

    public async loadWebSceneToEditor(): Promise<void> {
        const props = await this.map.loadWebSceneProperties();
        this.editorEl.nativeElement.contentWindow.postMessage({
            language: 'json',
            value: JSON.stringify(props, null, '  ')
        }, '*');
    }

    public async updateWebScene(): Promise<void> {
        const props = await this.map.loadWebSceneProperties();
        this.map.sceneView.subscribe(view => {
            const viewingMode = view.viewingMode;
            props.initialViewProperties.viewingMode = viewingMode;
            props.initialViewProperties.viewpoint = view.viewpoint;
            this.loadWebSceneToEditor();
        });
    }

    public updateSceneView(): void {
        this.editorEl.nativeElement.contentWindow.postMessage('getValue', '*');
    }

    private cloneWebScene(): __esri.WebSceneProperties {
        const text = JSON.stringify(this.webscene);
        return JSON.parse(text);
    }

    private receiveMessage(e: MessageEvent): void {
        if (!this.editorEl.nativeElement.src.startsWith(e.origin)) {
            return;
        }
        this.map.sceneView.subscribe(async view => {
            try {
                const webSceneProps = JSON.parse(e.data);
                this.webscene = webSceneProps;
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

}
