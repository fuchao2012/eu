import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PickerAddComponent} from './picker-add/picker-add.component';
import {PickerListComponent} from './picker-list/picker-list.component';
import {PickerClientSignComponent} from './picker-client-sign/picker-client-sign.component';
import {PickerTransListComponent} from './picker-trans-list/picker-trans-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'picker-add',
    component: PickerAddComponent
  },
  {
    path: 'picker-list',
    component: PickerListComponent
  },
  {
    path: 'picker-client-sign',
    component: PickerClientSignComponent
  },
  {
    path: 'picker-trans-list',
    component: PickerTransListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PickerAddComponent,
    PickerListComponent,
    PickerClientSignComponent,
    PickerTransListComponent
  ]
})
export class PickerModule {
}
