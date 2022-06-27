import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from './ui/theme/layout/layout.module';
import { AppLocaleModule } from './app-locale.module';


@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule, AppLocaleModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
