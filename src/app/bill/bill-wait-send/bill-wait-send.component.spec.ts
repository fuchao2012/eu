import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillWaitSendComponent } from './bill-wait-send.component';

describe('BillWaitSendComponent', () => {
  let component: BillWaitSendComponent;
  let fixture: ComponentFixture<BillWaitSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillWaitSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillWaitSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
