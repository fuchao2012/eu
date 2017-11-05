import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_LOCALE, enUS} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserModule} from './user/user.module';
import {BillModule} from './bill/bill.module';
import {PackagingModule} from './packaging/packaging.module';
import {CommodityModule} from './commodity/commodity.module';
import {BillNoModule} from './bill-no/bill-no.module';
import {ReceiveModule} from './receive/receive.module';
import {PrintModule} from './print/print.module';
import {FreightModule} from './freight/freight.module';
import {HistoryModule} from './history/history.module';
import {PickerModule} from './picker/picker.module';
import {SystemModule} from './system/system.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    UserModule,
    BillModule,
    PackagingModule,
    CommodityModule,
    BillNoModule,
    ReceiveModule,
    PrintModule,
    FreightModule,
    HistoryModule,
    PickerModule,
    SystemModule
  ],
  providers: [
    {
      provide: NZ_LOCALE, useValue: enUS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
