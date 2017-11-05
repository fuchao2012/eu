import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrintGoodsInvoiceComponent} from './print-goods-invoice/print-goods-invoice.component';
import {PrintReceiveComponent} from './print-receive/print-receive.component';
import {PrintClientInvoiceComponent} from './print-client-invoice/print-client-invoice.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'print-goods-invoice',
    component: PrintGoodsInvoiceComponent
  },
  {
    path: 'print-receive',
    component: PrintReceiveComponent
  },
  {
    path: 'print-client-invoice',
    component: PrintClientInvoiceComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PrintGoodsInvoiceComponent,
    PrintReceiveComponent,
    PrintClientInvoiceComponent
  ]
})
export class PrintModule {
}
