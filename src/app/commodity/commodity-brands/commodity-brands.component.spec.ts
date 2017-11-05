import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityBrandsComponent } from './commodity-brands.component';

describe('CommodityBrandsComponent', () => {
  let component: CommodityBrandsComponent;
  let fixture: ComponentFixture<CommodityBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
