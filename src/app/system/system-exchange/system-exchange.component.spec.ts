import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemExchangeComponent } from './system-exchange.component';

describe('SystemExchangeComponent', () => {
  let component: SystemExchangeComponent;
  let fixture: ComponentFixture<SystemExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
