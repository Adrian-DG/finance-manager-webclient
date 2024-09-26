import {
	computed,
	inject,
	Injectable,
	Signal,
	signal,
	WritableSignal,
} from '@angular/core';
import { GenericService } from '../../shared/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { IRegisterUser } from '../dto/iregister-user.dto';
import { IApiResponse } from '../../shared/models/iapi-response.model';
import { IAuthenticatedReponse } from '../models/iauthenticted-response.model';
import { ILoginUser } from '../dto/ilogin-user.dto';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root',
})
export class AuthService extends GenericService {
	override getResourceUrl(): string {
		return 'auth';
	}

	constructor(protected override $http: HttpClient, private $router: Router) {
		super($http);
	}

	_jwtService = inject(JwtHelperService);
	public isAuthenticated$ = computed(() => {
		const access_token = localStorage.getItem('access_token');
		return access_token
			? this._jwtService.isTokenExpired(access_token)
			: true;
	});

	registerUser(user: IRegisterUser): void {
		this.$http
			.post<IApiResponse<any>>(`${this.endpoint}/sign-up`, user)
			.subscribe((response: IApiResponse<any>) =>
				this._snackBar.open(response.message, '', this._snackBarConfig)
			);
	}

	loginUser(credentials: ILoginUser): void {
		this.$http
			.post<IApiResponse<IAuthenticatedReponse>>(
				`${this.endpoint}/sign-in`,
				credentials
			)
			.subscribe((response: IApiResponse<IAuthenticatedReponse>) => {
				const { status, data } = response;
				if (status) {
					localStorage.setItem(
						'access_token',
						(data as IAuthenticatedReponse).access_token
					);
					this.$router.navigate(['accounts']);
				}
			});
	}
}
