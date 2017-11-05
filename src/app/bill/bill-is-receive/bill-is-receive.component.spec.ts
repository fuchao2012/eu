import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIsReceiveComponent } from './bill-is-receive.component';

describe('BillIsReceiveComponent', () => {
  let component: BillIsReceiveComponent;
  let fixture: ComponentFixture<BillIsReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillIsReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillIsReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
