import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSendChinaComponent } from './bill-send-china.component';

describe('BillSendChinaComponent', () => {
  let component: BillSendChinaComponent;
  let fixture: ComponentFixture<BillSendChinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillSendChinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSendChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
