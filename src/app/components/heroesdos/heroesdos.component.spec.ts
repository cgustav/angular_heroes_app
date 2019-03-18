import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesdosComponent } from './heroesdos.component';

describe('HeroesdosComponent', () => {
  let component: HeroesdosComponent;
  let fixture: ComponentFixture<HeroesdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
