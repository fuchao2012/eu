import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillClearComponent } from './bill-clear.component';

describe('BillClearComponent', () => {
  let component: BillClearComponent;
  let fixture: ComponentFixture<BillClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
