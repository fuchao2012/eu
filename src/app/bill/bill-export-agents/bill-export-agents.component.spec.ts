import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillExportAgentsComponent } from './bill-export-agents.component';

describe('BillExportAgentsComponent', () => {
  let component: BillExportAgentsComponent;
  let fixture: ComponentFixture<BillExportAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillExportAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillExportAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
