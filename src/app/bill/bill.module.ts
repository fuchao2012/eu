import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillListComponent} from './bill-list/bill-list.component';
import {BillNotPayComponent} from './bill-not-pay/bill-not-pay.component';
import {BillHadPayComponent} from './bill-had-pay/bill-had-pay.component';
import {BillWaitPackageComponent} from './bill-wait-package/bill-wait-package.component';
import {BillIsLackComponent} from './bill-is-lack/bill-is-lack.component';
import {BillHadDelayComponent} from './bill-had-delay/bill-had-delay.component';
import {BillWaitSendComponent} from './bill-wait-send/bill-wait-send.component';
import {BillHadPackageComponent} from './bill-had-package/bill-had-package.component';
import {BillSendAirportComponent} from './bill-send-airport/bill-send-airport.component';
import {BillSendChinaComponent} from './bill-send-china/bill-send-china.component';
import {BillClearComponent} from './bill-clear/bill-clear.component';
import {BillIsCheckComponent} from './bill-is-check/bill-is-check.component';
import {BillInChinaComponent} from './bill-in-china/bill-in-china.component';
import {BillIsBrokenComponent} from './bill-is-broken/bill-is-broken.component';
import {BillIsReceiveComponent} from './bill-is-receive/bill-is-receive.component';
import {BillIsCancledComponent} from './bill-is-cancled/bill-is-cancled.component';
import {BillIsClosedComponent} from './bill-is-closed/bill-is-closed.component';
import {BillExceptionComponent} from './bill-exception/bill-exception.component';
import {BillExportComponent} from './bill-export/bill-export.component';
import {BillExportBaoguanComponent} from './bill-export-baoguan/bill-export-baoguan.component';
import {BillExportAgentsComponent} from './bill-export-agents/bill-export-agents.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'bill-list',
    component: BillListComponent
  },
  {
    path: 'bill-not-pay',
    component: BillNotPayComponent
  },
  {
    path: 'bill-had-pay',
    component: BillHadPayComponent
  },
  {
    path: 'bill-wait-package',
    component: BillWaitPackageComponent
  },
  {
    path: 'bill-is-lack',
    component: BillIsLackComponent
  },
  {
    path: 'bill-had-delay',
    component: BillHadDelayComponent
  },
  {
    path: 'bill-wait-send',
    component: BillWaitSendComponent
  },
  {
    path: 'bill-had-package',
    component: BillHadPackageComponent
  },
  {
    path: 'bill-send-airport',
    component: BillSendAirportComponent
  },
  {
    path: 'bill-send-china',
    component: BillSendChinaComponent
  },
  {
    path: 'bill-clear',
    component: BillClearComponent
  },
  {
    path: 'bill-is-check',
    component: BillIsCheckComponent
  },
  {
    path: 'bill-in-china',
    component: BillInChinaComponent
  },
  {
    path: 'bill-is-broken',
    component: BillIsBrokenComponent
  },
  {
    path: 'bill-is-receive',
    component: BillIsReceiveComponent
  },
  {
    path: 'bill-is-cancled',
    component: BillIsCancledComponent
  },
  {
    path: 'bill-is-closed',
    component: BillIsClosedComponent
  },
  {
    path: 'bill-exception',
    component: BillExceptionComponent
  },
  {
    path: 'bill-export',
    component: BillExportComponent
  },
  {
    path: 'bill-export-baoguan',
    component: BillExportBaoguanComponent
  },
  {
    path: 'bill-export-agents',
    component: BillExportAgentsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    BillListComponent,
    BillNotPayComponent,
    BillHadPayComponent,
    BillWaitPackageComponent,
    BillIsLackComponent,
    BillHadDelayComponent,
    BillWaitSendComponent,
    BillHadPackageComponent,
    BillSendAirportComponent,
    BillSendChinaComponent,
    BillClearComponent,
    BillIsCheckComponent,
    BillInChinaComponent,
    BillIsBrokenComponent,
    BillIsReceiveComponent,
    BillIsCancledComponent,
    BillIsClosedComponent,
    BillExceptionComponent,
    BillExportComponent,
    BillExportBaoguanComponent,
    BillExportAgentsComponent]
})
export class BillModule {
}
