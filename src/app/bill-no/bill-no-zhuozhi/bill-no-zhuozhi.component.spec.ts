import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNoZhuozhiComponent } from './bill-no-zhuozhi.component';

describe('BillNoZhuozhiComponent', () => {
  let component: BillNoZhuozhiComponent;
  let fixture: ComponentFixture<BillNoZhuozhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillNoZhuozhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillNoZhuozhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
