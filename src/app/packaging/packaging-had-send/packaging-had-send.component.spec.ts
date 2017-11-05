import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingHadSendComponent } from './packaging-had-send.component';

describe('PackagingHadSendComponent', () => {
  let component: PackagingHadSendComponent;
  let fixture: ComponentFixture<PackagingHadSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingHadSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingHadSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
