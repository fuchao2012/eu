import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNoQrComponent } from './bill-no-qr.component';

describe('BillNoQrComponent', () => {
  let component: BillNoQrComponent;
  let fixture: ComponentFixture<BillNoQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillNoQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNoQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
