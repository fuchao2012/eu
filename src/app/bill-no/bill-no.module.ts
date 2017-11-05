import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillNoAddComponent} from './bill-no-add/bill-no-add.component';
import {BillNoSearchComponent} from './bill-no-search/bill-no-search.component';
import {BillNoListComponent} from './bill-no-list/bill-no-list.component';
import {BillNoZhuozhiComponent} from './bill-no-zhuozhi/bill-no-zhuozhi.component';
import {BillNoQrComponent} from './bill-no-qr/bill-no-qr.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'billNo-add',
    component: BillNoAddComponent
  },
  {
    path: 'billNo-search',
    component: BillNoSearchComponent
  },
  {
    path: 'billNo-list',
    component: BillNoListComponent
  },
  {
    path: 'billNo-zhuozhi',
    component: BillNoZhuozhiComponent
  },
  {
    path: 'billNo-qr',
    component: BillNoQrComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    BillNoAddComponent,
    BillNoSearchComponent,
    BillNoListComponent,
    BillNoZhuozhiComponent,
    BillNoQrComponent
  ]
})
export class BillNoModule {
}
