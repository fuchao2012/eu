import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIsLackComponent } from './bill-is-lack.component';

describe('BillIsLackComponent', () => {
  let component: BillIsLackComponent;
  let fixture: ComponentFixture<BillIsLackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillIsLackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillIsLackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
