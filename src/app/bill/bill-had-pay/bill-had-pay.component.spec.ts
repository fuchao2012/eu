import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillHadPayComponent } from './bill-had-pay.component';

describe('BillHadPayComponent', () => {
  let component: BillHadPayComponent;
  let fixture: ComponentFixture<BillHadPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillHadPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillHadPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
