import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingExportComponent } from './packaging-export.component';

describe('PackagingExportComponent', () => {
  let component: PackagingExportComponent;
  let fixture: ComponentFixture<PackagingExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
