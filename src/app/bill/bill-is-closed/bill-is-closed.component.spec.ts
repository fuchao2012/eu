import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIsClosedComponent } from './bill-is-closed.component';

describe('BillIsClosedComponent', () => {
  let component: BillIsClosedComponent;
  let fixture: ComponentFixture<BillIsClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillIsClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillIsClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
