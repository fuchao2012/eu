import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOrderListComponent } from './history-order-list.component';

describe('HistoryOrderListComponent', () => {
  let component: HistoryOrderListComponent;
  let fixture: ComponentFixture<HistoryOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
