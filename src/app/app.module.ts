import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';


import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//change locale in the app
import { registerLocaleData } from '@angular/common';
import localEsCu from '@angular/common/locales/es-CU';
import localFr from '@angular/common/locales/fr';
registerLocaleData( localEsCu );
registerLocaleData( localFr );


@NgModule({
  declarations: [AppComponent],
  imports: [AppRouterModule, BrowserModule, BrowserAnimationsModule, SalesModule, SharedModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CU' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
