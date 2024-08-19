import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'accounts',
		loadComponent: () =>
			import('./accounts/index/index.component').then(
				(c) => c.IndexComponent
			),
	},
];
