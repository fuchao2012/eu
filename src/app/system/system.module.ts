import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemExchangeComponent} from './system-exchange/system-exchange.component';
import {SystemAuthComponent} from './system-auth/system-auth.component';
import {SystemUserComponent} from './system-user/system-user.component';
import {SystemDictComponent} from './system-dict/system-dict.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'system-exchange',
    component: SystemExchangeComponent
  },
  {
    path: 'system-auth',
    component: SystemAuthComponent
  },
  {
    path: 'system-user',
    component: SystemUserComponent
  },
  {
    path: 'system-dict',
    component: SystemDictComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    SystemExchangeComponent,
    SystemAuthComponent,
    SystemUserComponent,
    SystemDictComponent
  ]
})
export class SystemModule {
}
