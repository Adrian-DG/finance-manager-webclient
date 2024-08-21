import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const CheckIfAuthenticated = () => {
	const _authService = inject(AuthService);
	const $router = inject(Router);
	if (!_authService.isAuthenticated$()) {
		$router.navigate(['authentication']);
		console.log('Not authenticated!!');
		return false;
	}
	return true;
};
