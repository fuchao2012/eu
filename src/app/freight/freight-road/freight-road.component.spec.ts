import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightRoadComponent } from './freight-road.component';

describe('FreightRoadComponent', () => {
  let component: FreightRoadComponent;
  let fixture: ComponentFixture<FreightRoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightRoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
