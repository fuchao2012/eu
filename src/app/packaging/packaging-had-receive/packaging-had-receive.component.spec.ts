import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingHadReceiveComponent } from './packaging-had-receive.component';

describe('PackagingHadReceiveComponent', () => {
  let component: PackagingHadReceiveComponent;
  let fixture: ComponentFixture<PackagingHadReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingHadReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingHadReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
