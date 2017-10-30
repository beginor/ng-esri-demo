import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const target = fixture.componentInstance;
        expect(target).toBeTruthy();
    }));

    it(`should has a navbar-brand 'Angular Demo'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const targetEl: HTMLElement = fixture.debugElement.nativeElement;
        expect(targetEl.querySelector('a.navbar-brand').textContent)
            .toEqual('Angular Demo');
    }));

});
