import { Injectable } from '@angular/core';
import { GenericService } from '../../shared/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AccountService extends GenericService {
	constructor(protected override $http: HttpClient) {
		super($http);
	}

	override getResourceUrl(): string {
		return 'accounts';
	}

	getAllAccounts() {
		return this.$http.get(`${this.endpoint}/${1}`);
	}
}
