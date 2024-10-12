import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { CheckIfAuthenticated } from './auth/guards/authetication.guard';

export const routes: Routes = [
	{
		path: 'incomes',
		loadComponent: () =>
			import('./incomes/pages/index/index.component').then(
				(c) => c.IndexComponent
			),
		loadChildren: () =>
			import('./incomes/income.routes').then((c) => c.incomeRoutes),
	},
	{
		path: 'accounts',
		loadComponent: () =>
			import('./accounts/pages/index/index.component').then(
				(c) => c.IndexComponent
			),
		loadChildren: () =>
			import('./accounts/account.routes').then((c) => c.accountRoutes),
	},
	{
		path: 'authentication',
		loadChildren: () =>
			import('./auth/auth.routes').then((c) => c.authRoutes),
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
