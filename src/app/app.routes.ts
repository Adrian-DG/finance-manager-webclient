import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { CheckIfAuthenticated } from './auth/guards/authetication.guard';

export const routes: Routes = [
	{
		path: 'accounts',
		loadComponent: () =>
			import('./accounts/pages/index/index.component').then(
				(c) => c.IndexComponent
			),
		canActivate: [() => CheckIfAuthenticated()],
		children: [
			{
				path: 'all',
				loadComponent: () =>
					import('./accounts/components/list/list.component').then(
						(c) => c.ListComponent
					),
			},
			{
				path: 'create',
				loadComponent: () =>
					import(
						'./accounts/components/account-form/account-form.component'
					).then((c) => c.AccountFormComponent),
			},
			{
				path: '',
				redirectTo: 'all',
				pathMatch: 'full',
			},
		],
	},
	{
		path: 'authentication',
		canActivate: [() => !CheckIfAuthenticated()],
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./auth/pages/index/index.component').then(
						(c) => c.IndexComponent
					),
			},
			{
				path: 'sign-in',
				loadComponent: () =>
					import('./auth/pages/signin/signin.component').then(
						(c) => c.SigninComponent
					),
			},
		],
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
