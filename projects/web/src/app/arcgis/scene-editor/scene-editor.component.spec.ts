import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneEditorComponent } from './scene-editor.component';

describe('SceneEditorComponent', () => {
    let component: SceneEditorComponent;
    let fixture: ComponentFixture<SceneEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SceneEditorComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SceneEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
