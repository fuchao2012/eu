import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNoListComponent } from './bill-no-list.component';

describe('BillNoListComponent', () => {
  let component: BillNoListComponent;
  let fixture: ComponentFixture<BillNoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillNoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
