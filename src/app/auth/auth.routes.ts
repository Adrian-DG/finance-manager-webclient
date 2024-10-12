import { Route } from '@angular/router';

export const authRoutes: Route[] = [
	{
		path: 'sign-in',
		loadComponent: () =>
			import('./pages/signin/signin.component').then(
				(c) => c.SigninComponent
			),
	},
	{
		path: '',
		loadComponent: () =>
			import('./pages/index/index.component').then(
				(c) => c.IndexComponent
			),
	},
];
