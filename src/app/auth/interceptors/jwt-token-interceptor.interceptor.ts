import { HttpInterceptorFn } from '@angular/common/http';

export const jwtTokenInterceptor: HttpInterceptorFn = (req, next) => {
	const access_token = localStorage.getItem('access_token');

	const newRequest = req.clone({
		setHeaders: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	return next(newRequest);
};
