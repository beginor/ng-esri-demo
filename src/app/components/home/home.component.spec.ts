import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

    let fixture: ComponentFixture<HomeComponent>;
    let target: HomeComponent;
    let targetEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                RouterTestingModule
            ],
            declarations: [
                HomeComponent
            ]
        }).compileComponents();
        // create test target;
        fixture = TestBed.createComponent(HomeComponent);
        target = fixture.componentInstance;
        targetEl = fixture.debugElement.nativeElement;
    }));

    it('should create HomeComponent', async(() => {
        expect(target).toBeTruthy();
    }));

    it(`should has a message equals 'Hello, Angular !'`, async(() => {
        expect(target.message).toEqual('Hello, Angular !');
    }));

    it(`should has count equals 0`, async(() => {
        expect(target.count).toEqual(0);
    }));

    it(`should increase count onClick`, async(() => {
        expect(target.count).toEqual(0);
        target.onClick();
        expect(target.count).toBeGreaterThan(0);
    }));

    it(`should change message onClick`, async(() => {
        expect(target.message).toEqual('Hello, Angular !');
        target.onClick();
        expect(target.message).toContain('You have clicked');
    }));

    it(`should has a button`, async(() => {
        fixture.detectChanges();
        const btn = targetEl.querySelector('button.btn');
        expect(btn).toBeTruthy();
        expect(btn.textContent).toEqual('Hello, Angular !');
    }));

    it(`should change button content after click`, async(() => {
        fixture.detectChanges();
        const btn = targetEl.querySelector('button.btn');
        btn.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(btn.textContent).toContain('You have clicked');
    }));

});
