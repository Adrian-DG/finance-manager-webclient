import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'accounts',
		loadComponent: () =>
			import('./accounts/index/index.component').then(
				(c) => c.IndexComponent
			),
		canActivate: [false], //  TODO: should be protected with an Authentication guard
	},
	{
		path: 'authentication',
		loadComponent: () =>
			import('./auth/pages/index/index.component').then(
				(c) => c.IndexComponent
			),
	},
	{
		path: '',
		redirectTo: 'authentication',
		pathMatch: 'full',
	},
	{
		path: '**',
		loadComponent: () =>
			import('./shared/ui/not-found/not-found.component').then(
				(c) => c.NotFoundComponent
			),
	},
];
