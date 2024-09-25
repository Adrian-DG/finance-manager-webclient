import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ResourceListComponent } from '../../../shared/ui/resource-list/resource-list.component';
import { AccountService } from '../../services/account.service';
import { IPaginationFilter } from '../../../shared/dto/ipagination-filter.dto';
import { IApiResponse } from '../../../shared/models/iapi-response.model';
import { IPagedData } from '../../../shared/models/ipaged-data.model';
import { IAccountDetail } from '../../models/iaccount-detail.model';
import { ResourcePaginatorComponent } from '../../../shared/ui/resource-paginator/resource-paginator.component';
import { BaseListResource } from '../../../shared/base-list-resource.metadata';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [
		CommonModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		ResourceListComponent,
		ResourcePaginatorComponent,
	],
	templateUrl: './list.component.html',
	styleUrl: './list.component.scss',
})
export class ListComponent
	extends BaseListResource<IAccountDetail>
	implements OnInit
{
	constructor(private _accountService: AccountService) {
		super();
	}

	ngOnInit(): void {
		this.loadData();
	}

	loadData() {
		this._accountService
			.getAllAccounts(this.filters$())
			.subscribe((data: IPagedData<IAccountDetail>) => {
				this.records$.set(data.records);
				this.totalCount$.set(data.totalCount);
			});
	}
}
