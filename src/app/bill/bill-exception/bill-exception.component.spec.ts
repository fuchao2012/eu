import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillExceptionComponent } from './bill-exception.component';

describe('BillExceptionComponent', () => {
  let component: BillExceptionComponent;
  let fixture: ComponentFixture<BillExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
