import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FreightAddComponent} from './freight-add/freight-add.component';
import {FreightListComponent} from './freight-list/freight-list.component';
import {FreightRoadComponent} from './freight-road/freight-road.component';
import {FreightPlaceComponent} from './freight-place/freight-place.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'freight-add',
    component: FreightAddComponent
  },
  {
    path: 'freight-list',
    component: FreightListComponent
  },
  {
    path: 'freight-road',
    component: FreightRoadComponent
  },
  {
    path: 'freight-place',
    component: FreightPlaceComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    FreightAddComponent,
    FreightListComponent,
    FreightRoadComponent,
    FreightPlaceComponent
  ]
})
export class FreightModule {
}
