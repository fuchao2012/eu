import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightPlaceComponent } from './freight-place.component';

describe('FreightPlaceComponent', () => {
  let component: FreightPlaceComponent;
  let fixture: ComponentFixture<FreightPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
