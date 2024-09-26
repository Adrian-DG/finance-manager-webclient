import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, delay, retry, throwError } from 'rxjs';
import { GenericService } from '../services/generic.service';
import { inject } from '@angular/core';
import { IApiResponse } from '../models/iapi-response.model';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
	return next(req).pipe(
		retry({ count: 2, delay: 5000 }),
		catchError((error: IApiResponse<any>) => {
			return throwError(error);
		})
	);
};
