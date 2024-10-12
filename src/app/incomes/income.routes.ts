import { Route } from '@angular/router';

export const incomeRoutes: Route[] = [
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
			import('./components/income-form/income-form.component').then(
				(c) => c.IncomeFormComponent
			),
	},
];
