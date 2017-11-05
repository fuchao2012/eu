import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNoAddComponent } from './bill-no-add.component';

describe('BillNoAddComponent', () => {
  let component: BillNoAddComponent;
  let fixture: ComponentFixture<BillNoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillNoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
