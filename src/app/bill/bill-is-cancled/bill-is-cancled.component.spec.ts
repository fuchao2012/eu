import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIsCancledComponent } from './bill-is-cancled.component';

describe('BillIsCancledComponent', () => {
  let component: BillIsCancledComponent;
  let fixture: ComponentFixture<BillIsCancledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillIsCancledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillIsCancledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
