import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillExportBaoguanComponent } from './bill-export-baoguan.component';

describe('BillExportBaoguanComponent', () => {
  let component: BillExportBaoguanComponent;
  let fixture: ComponentFixture<BillExportBaoguanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillExportBaoguanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillExportBaoguanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
