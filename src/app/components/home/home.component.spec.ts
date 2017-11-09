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

});
