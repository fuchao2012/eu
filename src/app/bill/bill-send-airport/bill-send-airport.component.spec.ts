import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSendAirportComponent } from './bill-send-airport.component';

describe('BillSendAirportComponent', () => {
  let component: BillSendAirportComponent;
  let fixture: ComponentFixture<BillSendAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillSendAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSendAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
