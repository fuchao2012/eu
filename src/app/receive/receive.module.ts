import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceiveListComponent} from './receive-list/receive-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'receive-list',
    component: ReceiveListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ReceiveListComponent]
})
export class ReceiveModule {
}
