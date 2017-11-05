import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryOrderListComponent} from './history-order-list/history-order-list.component';
import {HistoryTransListComponent} from './history-trans-list/history-trans-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'history-order-list',
    component: HistoryOrderListComponent
  },
  {
    path: 'history-trans-list',
    component: HistoryTransListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [HistoryOrderListComponent, HistoryTransListComponent]
})
export class HistoryModule {
}
