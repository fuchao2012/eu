import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNotPayComponent } from './bill-not-pay.component';

describe('BillNotPayComponent', () => {
  let component: BillNotPayComponent;
  let fixture: ComponentFixture<BillNotPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillNotPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNotPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
