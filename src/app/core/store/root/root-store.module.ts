import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootInitialState, rootReducers } from './+state/root.reducer';
import { RootRouterStateSerializer } from './services/root-router-state-serializer.service';

@NgModule({
	imports: [
		RouterModule,
		StoreModule.forRoot(rootReducers, {
			initialState: rootInitialState,
			metaReducers: [],
		}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot({
			serializer: RootRouterStateSerializer,
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
		}),
	],
})
export class RootStoreModule {}
