import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillExportComponent } from './bill-export.component';

describe('BillExportComponent', () => {
  let component: BillExportComponent;
  let fixture: ComponentFixture<BillExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
