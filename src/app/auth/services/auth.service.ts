import {
	computed,
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

@Injectable({
	providedIn: 'root',
})
export class AuthService extends GenericService {
	override getResourceUrl(): string {
		return 'auth';
	}

	public isAuthenticated$: WritableSignal<boolean> = signal(true); // change to false on Init

	constructor(protected override $http: HttpClient, private $router: Router) {
		super($http);
	}

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
				const { message, status } = response;
				if (status) {
					this.isAuthenticated$.set(status);
					this.$router.navigate(['accounts']);
					this._snackBar.open(message, '', this._snackBarConfig);
				}
			});
	}
}
