import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {NotSendComponent} from './not-send/not-send.component';
import {PackagingHadSendComponent} from './packaging-had-send/packaging-had-send.component';
import {PackagingHadReceiveComponent} from './packaging-had-receive/packaging-had-receive.component';
import {PackagingHadCancelComponent} from './packaging-had-cancel/packaging-had-cancel.component';
import {PackagingReceiveClosedComponent} from './packaging-receive-closed/packaging-receive-closed.component';
import {PackagingIsClosedComponent} from './packaging-is-closed/packaging-is-closed.component';
import {PackagingReturnClosedComponent} from './packaging-return-closed/packaging-return-closed.component';
import {PackagingExportComponent} from './packaging-export/packaging-export.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'packaging-list',
    component: ListComponent
  },
  {
    path: 'packaging-not-send',
    component: NotSendComponent
  },
  {
    path: 'packaging-had-send',
    component: PackagingHadSendComponent
  },
  {
    path: 'packaging-had-receive',
    component: PackagingHadReceiveComponent
  },
  {
    path: 'packaging-had-cancel',
    component: PackagingHadCancelComponent
  },
  {
    path: 'packaging-receive-closed',
    component: PackagingReceiveClosedComponent
  },
  {
    path: 'packaging-is-closed',
    component: PackagingIsClosedComponent
  },
  {
    path: 'packaging-return-closed',
    component: PackagingReturnClosedComponent
  },
  {
    path: 'packaging-export',
    component: PackagingExportComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListComponent,
    NotSendComponent,
    PackagingHadSendComponent,
    PackagingHadReceiveComponent,
    PackagingHadCancelComponent,
    PackagingReceiveClosedComponent,
    PackagingIsClosedComponent,
    PackagingReturnClosedComponent,
    PackagingExportComponent
  ]
})
export class PackagingModule {
}
