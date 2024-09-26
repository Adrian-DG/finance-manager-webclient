import {
	ApplicationConfig,
	importProvidersFrom,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { errorHandlingInterceptor } from './shared/interceptors/error-handling-interceptor.interceptor';
import { jwtTokenInterceptor } from './auth/interceptors/jwt-token-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideAnimationsAsync(),
		provideHttpClient(
			withInterceptors([jwtTokenInterceptor, errorHandlingInterceptor])
		),
		importProvidersFrom([
			JwtModule.forRoot({
				config: {
					tokenGetter: () => localStorage.getItem('access_token'),
				},
			}),
		]),
	],
};
