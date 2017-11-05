import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIsCheckComponent } from './bill-is-check.component';

describe('BillIsCheckComponent', () => {
  let component: BillIsCheckComponent;
  let fixture: ComponentFixture<BillIsCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillIsCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillIsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
