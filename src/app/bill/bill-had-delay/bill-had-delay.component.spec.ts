import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillHadDelayComponent } from './bill-had-delay.component';

describe('BillHadDelayComponent', () => {
  let component: BillHadDelayComponent;
  let fixture: ComponentFixture<BillHadDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillHadDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillHadDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
