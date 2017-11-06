import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {SendEmailComponent} from './send-email/send-email.component';
import {WaitPickComponent} from './wait-pick/wait-pick.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ListComponent, SendEmailComponent, WaitPickComponent]
})
export class UserModule {
}
