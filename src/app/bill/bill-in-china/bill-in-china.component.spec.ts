import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInChinaComponent } from './bill-in-china.component';

describe('BillInChinaComponent', () => {
  let component: BillInChinaComponent;
  let fixture: ComponentFixture<BillInChinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillInChinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillInChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
