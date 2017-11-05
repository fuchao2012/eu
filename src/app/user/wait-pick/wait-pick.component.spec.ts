import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitPickComponent } from './wait-pick.component';

describe('WaitPickComponent', () => {
  let component: WaitPickComponent;
  let fixture: ComponentFixture<WaitPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
