import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReceiveComponent } from './print-receive.component';

describe('PrintReceiveComponent', () => {
  let component: PrintReceiveComponent;
  let fixture: ComponentFixture<PrintReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
