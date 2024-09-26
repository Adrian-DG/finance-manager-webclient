import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const CheckIfAuthenticated = () => {
	const $router = inject(Router);
	const _authService = inject(AuthService);
	const isAuthenticated = _authService.isAuthenticated$();
	if (_authService.isAuthenticated$()) {
		$router.navigate(['']);
		_authService.showNotifySnackbar('Token invalid or expired');
		return false;
	}
	return true;
};
