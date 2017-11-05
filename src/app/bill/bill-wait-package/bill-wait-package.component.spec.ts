import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillWaitPackageComponent } from './bill-wait-package.component';

describe('BillWaitPackageComponent', () => {
  let component: BillWaitPackageComponent;
  let fixture: ComponentFixture<BillWaitPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillWaitPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillWaitPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
