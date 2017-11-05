import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingReceiveClosedComponent } from './packaging-receive-closed.component';

describe('PackagingReceiveClosedComponent', () => {
  let component: PackagingReceiveClosedComponent;
  let fixture: ComponentFixture<PackagingReceiveClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingReceiveClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingReceiveClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
