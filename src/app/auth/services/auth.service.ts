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

@Injectable({
	providedIn: 'root',
})
export class AuthService extends GenericService {
	override getResourceUrl(): string {
		return 'auth';
	}

	private isAuthenticatedSource: WritableSignal<boolean> = signal(false);
	public isAuthenticated$: Signal<boolean> = computed(() =>
		this.isAuthenticatedSource()
	);

	constructor(protected override $http: HttpClient) {
		super($http);
	}

	registerUser(user: IRegisterUser): void {
		this.$http
			.post<IApiResponse<any>>(`${this.endpoint}/sign-up`, user)
			.subscribe((response: IApiResponse<any>) => {});
	}
}
