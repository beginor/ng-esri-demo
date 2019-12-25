import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSharedComponent } from './app-shared.component';

describe('AppSharedComponent', () => {
  let component: AppSharedComponent;
  let fixture: ComponentFixture<AppSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
