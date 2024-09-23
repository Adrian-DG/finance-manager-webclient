import { Injectable } from '@angular/core';
import { GenericService } from '../../shared/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../shared/models/iapi-response.model';
import { IPaginationFilter } from '../../shared/dto/ipagination-filter.dto';

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

	getAllAccounts(filters: IPaginationFilter) {
		const params = this.getPaginationQueryParams(filters);
		return this.$http.get<IApiResponse<any>>(`${this.endpoint}`, {
			params: params,
		});
	}
}
