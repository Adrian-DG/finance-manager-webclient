import { Injectable } from '@angular/core';
import { GenericService } from '../../shared/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IApiResponse } from '../../shared/models/iapi-response.model';
import { IPaginationFilter } from '../../shared/dto/ipagination-filter.dto';
import { IPagedData } from '../../shared/models/ipaged-data.model';
import { IAccountDetail } from '../models/iaccount-detail.model';
import { ICreateAccount } from '../dto/icreate-account.dto';
import { NotifyDialogComponent } from '../../shared/ui/notify-dialog/notify-dialog.component';

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

	getAllAccounts(
		filters: IPaginationFilter
	): Observable<IPagedData<IAccountDetail>> {
		const params = this.getPaginationQueryParams(filters);
		return this.$http
			.get<IApiResponse<IPagedData<IAccountDetail>>>(`${this.endpoint}`, {
				params: params,
			})
			.pipe(
				map(
					(response: IApiResponse<IPagedData<IAccountDetail>>) =>
						response.data
				)
			);
	}

	createAccount(accountDto: ICreateAccount) {
		this.$http
			.post<IApiResponse<any>>(`${this.endpoint}`, accountDto)
			.subscribe((resp: IApiResponse<any>) =>
				this.showNotifyDialog(resp)
			);
	}

	deleteAccount(id: number) {
		this.$http
			.delete<IApiResponse<any>>(`${this.endpoint}/${id}`)
			.subscribe((resp: IApiResponse<any>) =>
				this.showNotifyDialog(resp)
			);
	}
}
