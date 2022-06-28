import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconsModule } from '@app/ui/icons';

import { MatButtonModule } from '@angular/material/button';

import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule, RouterModule, IconsModule, MatButtonModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
