import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerClientSignComponent } from './picker-client-sign.component';

describe('PickerClientSignComponent', () => {
  let component: PickerClientSignComponent;
  let fixture: ComponentFixture<PickerClientSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerClientSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerClientSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
