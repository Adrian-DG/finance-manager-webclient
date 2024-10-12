import { Injectable } from '@angular/core';
import { GenericService } from '../../shared/services/generic.service';
import { HttpClient } from '@angular/common/http';
import { ICreateIncome } from '../dto/create-income.dto';
import { IApiResponse } from '../../shared/models/iapi-response.model';
import { IPagedData } from '../../shared/models/ipaged-data.model';
import { IIncomeDetail } from '../models/income-detail.model';
import { IPaginationFilter } from '../../shared/dto/ipagination-filter.dto';
import { map, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class IncomeService extends GenericService {
	override getResourceUrl(): string {
		return 'incomes';
	}

	constructor(protected override $http: HttpClient) {
		super($http);
	}

	getAllIncomes(
		filters: IPaginationFilter
	): Observable<IPagedData<IIncomeDetail>> {
		const params = this.getPaginationQueryParams(filters);
		return this.$http
			.get<IApiResponse<IPagedData<IIncomeDetail>>>(`${this.endpoint}`, {
				params: params,
			})
			.pipe(
				map(
					(response: IApiResponse<IPagedData<IIncomeDetail>>) =>
						response.data
				)
			);
	}

	create(incomeDto: ICreateIncome) {
		this.$http
			.post<IApiResponse<any>>(`${this.endpoint}`, incomeDto)
			.subscribe((response: IApiResponse<any>) =>
				this.showNotifyDialog(response)
			);
	}
}
