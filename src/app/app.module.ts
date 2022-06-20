import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/uk';

import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localeUa);
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'uk-UA',
		},
		{
			provide: DEFAULT_CURRENCY_CODE,
			useValue: 'UAH',
		},
		{
			provide: MAT_DATE_LOCALE,
			useValue: 'uk-UA',
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
