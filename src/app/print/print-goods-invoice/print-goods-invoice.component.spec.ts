import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintGoodsInvoiceComponent } from './print-goods-invoice.component';

describe('PrintGoodsInvoiceComponent', () => {
  let component: PrintGoodsInvoiceComponent;
  let fixture: ComponentFixture<PrintGoodsInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintGoodsInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintGoodsInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
