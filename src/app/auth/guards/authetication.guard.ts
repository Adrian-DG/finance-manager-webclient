import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const CheckIfAuthenticated = () => {
	const _authService = inject(AuthService);
	const $router = inject(Router);
	const isAuthenticated = _authService.isAuthenticated$();
	if (!isAuthenticated) {
		console.log('Not authenticated!!');
		$router.navigate(['authentication']);
		return false;
	}
	console.log('Is Authenticated: ', isAuthenticated);
	return true;
};
