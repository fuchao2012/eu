import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingHadCancelComponent } from './packaging-had-cancel.component';

describe('PackagingHadCancelComponent', () => {
  let component: PackagingHadCancelComponent;
  let fixture: ComponentFixture<PackagingHadCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingHadCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingHadCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
