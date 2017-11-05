import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSendComponent } from './not-send.component';

describe('NotSendComponent', () => {
  let component: NotSendComponent;
  let fixture: ComponentFixture<NotSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
