import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingIsClosedComponent } from './packaging-is-closed.component';

describe('PackagingIsClosedComponent', () => {
  let component: PackagingIsClosedComponent;
  let fixture: ComponentFixture<PackagingIsClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingIsClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingIsClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
