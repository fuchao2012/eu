import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingReturnClosedComponent } from './packaging-return-closed.component';

describe('PackagingReturnClosedComponent', () => {
  let component: PackagingReturnClosedComponent;
  let fixture: ComponentFixture<PackagingReturnClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingReturnClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingReturnClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
