import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {Routes, RouterModule} from '@angular/router';
import {SendEmailComponent} from './send-email/send-email.component';
import {WaitPickComponent} from './wait-pick/wait-pick.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: ListComponent
  }, {
    path: 'user-sended-email',
    component: SendEmailComponent
  }, {
    path: 'user-wait-pick',
    component: WaitPickComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListComponent, SendEmailComponent, WaitPickComponent]
})
export class UserModule {
}
