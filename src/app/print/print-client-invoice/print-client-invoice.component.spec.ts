import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintClientInvoiceComponent } from './print-client-invoice.component';

describe('PrintClientInvoiceComponent', () => {
  let component: PrintClientInvoiceComponent;
  let fixture: ComponentFixture<PrintClientInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintClientInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintClientInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
