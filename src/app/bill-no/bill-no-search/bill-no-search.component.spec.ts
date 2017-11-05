import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNoSearchComponent } from './bill-no-search.component';

describe('BillNoSearchComponent', () => {
  let component: BillNoSearchComponent;
  let fixture: ComponentFixture<BillNoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillNoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
