import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTransListComponent } from './history-trans-list.component';

describe('HistoryTransListComponent', () => {
  let component: HistoryTransListComponent;
  let fixture: ComponentFixture<HistoryTransListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTransListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTransListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
