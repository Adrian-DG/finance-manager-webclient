import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { CheckIfAuthenticated } from './auth/guards/authetication.guard';

export const routes: Routes = [
	{
		path: 'accounts',
		loadComponent: () =>
			import('./accounts/index/index.component').then(
				(c) => c.IndexComponent
			),
		canActivate: [() => CheckIfAuthenticated()], //  TODO: should be protected with an Authentication guard
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
