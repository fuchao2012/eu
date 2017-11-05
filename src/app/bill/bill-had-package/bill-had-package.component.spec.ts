import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillHadPackageComponent } from './bill-had-package.component';

describe('BillHadPackageComponent', () => {
  let component: BillHadPackageComponent;
  let fixture: ComponentFixture<BillHadPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillHadPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillHadPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
