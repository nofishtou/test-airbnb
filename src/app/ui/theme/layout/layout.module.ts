import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
	declarations: [LayoutComponent, MainComponent],
  imports: [RouterModule, HeaderModule, FooterModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
