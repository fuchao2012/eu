import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
