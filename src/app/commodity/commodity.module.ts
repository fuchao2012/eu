import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommodityAddComponent} from './commodity-add/commodity-add.component';
import {CommodityClassComponent} from './commodity-class/commodity-class.component';
import {CommodityBrandsComponent} from './commodity-brands/commodity-brands.component';
import {CommodityListComponent} from './commodity-list/commodity-list.component';
import {CommodityPackageListComponent} from './commodity-package-list/commodity-package-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: 'commodity-add',
    component: CommodityAddComponent
  },
  {
    path: 'commodity-class',
    component: CommodityClassComponent
  },
  {
    path: 'commodity-brands',
    component: CommodityBrandsComponent
  },
  {
    path: 'commodity-list',
    component: CommodityListComponent
  },
  {
    path: 'commodity-package-list',
    component: CommodityPackageListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    CommodityAddComponent,
    CommodityClassComponent,
    CommodityBrandsComponent,
    CommodityListComponent,
    CommodityPackageListComponent
  ]
})
export class CommodityModule {
}
