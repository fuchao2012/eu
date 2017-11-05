import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerTransListComponent } from './picker-trans-list.component';

describe('PickerTransListComponent', () => {
  let component: PickerTransListComponent;
  let fixture: ComponentFixture<PickerTransListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickerTransListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickerTransListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
