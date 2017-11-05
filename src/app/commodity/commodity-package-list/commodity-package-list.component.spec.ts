import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityPackageListComponent } from './commodity-package-list.component';

describe('CommodityPackageListComponent', () => {
  let component: CommodityPackageListComponent;
  let fixture: ComponentFixture<CommodityPackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityPackageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
