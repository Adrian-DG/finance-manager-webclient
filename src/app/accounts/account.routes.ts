import { Route } from '@angular/router';

export const accountRoutes: Route[] = [
	{
		path: 'all',
		loadComponent: () =>
			import('./components/list/list.component').then(
				(c) => c.ListComponent
			),
	},
	{
		path: 'create',
		loadComponent: () =>
			import('./components/account-form/account-form.component').then(
				(c) => c.AccountFormComponent
			),
	},
];
