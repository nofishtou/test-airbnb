import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './components/header/header.module';

import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
	declarations: [LayoutComponent, FooterComponent, MainComponent],
  imports: [CommonModule, RouterModule, HeaderModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
