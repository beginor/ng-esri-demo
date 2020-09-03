import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                RouterTestingModule
            ],
            declarations: [
                HomeComponent
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create HomeComponent', () => {
        expect(component).toBeTruthy();
    });

    it(`should has a button`, () => {
        const element = fixture.nativeElement;
        const btn = element.querySelector('button.btn') as HTMLButtonElement;
        expect(btn).toBeTruthy();
        expect(btn.textContent).toEqual('Hello, Angular !');
    });

    it(`should change button content after click`, () => {
        const element = fixture.nativeElement;
        const btn = element.querySelector('button.btn') as HTMLButtonElement;
        btn.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(btn.textContent).toContain('You have clicked');
    });

});
