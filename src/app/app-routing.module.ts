import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent, LayoutModule } from '@app/ui/theme/layout';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			// routes
		],
	},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
