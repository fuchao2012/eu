import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerAddComponent } from './picker-add.component';

describe('PickerAddComponent', () => {
  let component: PickerAddComponent;
  let fixture: ComponentFixture<PickerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
