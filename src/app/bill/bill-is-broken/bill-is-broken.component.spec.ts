import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIsBrokenComponent } from './bill-is-broken.component';

describe('BillIsBrokenComponent', () => {
  let component: BillIsBrokenComponent;
  let fixture: ComponentFixture<BillIsBrokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillIsBrokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillIsBrokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
