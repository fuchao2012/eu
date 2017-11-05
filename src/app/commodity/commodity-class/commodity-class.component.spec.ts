import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityClassComponent } from './commodity-class.component';

describe('CommodityClassComponent', () => {
  let component: CommodityClassComponent;
  let fixture: ComponentFixture<CommodityClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
