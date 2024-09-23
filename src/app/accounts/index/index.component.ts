import {
	AfterViewInit,
	Component,
	EventEmitter,
	OnInit,
	ViewChild,
} from '@angular/core';
import { AccountService } from '../services/account.service';
import { PageIntroComponent } from '../../shared/ui/page-intro/page-intro.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import {
	catchError,
	map,
	merge,
	pipe,
	startWith,
	switchMap,
	of as ObservableOf,
} from 'rxjs';
import { IApiResponse } from '../../shared/models/iapi-response.model';
import { IPagedData } from '../../shared/models/ipaged-data.model';
import { MatTableModule } from '@angular/material/table';

@Component({
	selector: 'app-index',
	standalone: true,
	imports: [
		PageIntroComponent,
		MatCardModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
	],
	templateUrl: './index.component.html',
	styleUrl: './index.component.scss',
	providers: [AccountService],
})
export class IndexComponent implements AfterViewInit {
	displayedColumns = ['id', 'account', 'ammount', 'actions'];
	resultData!: any[];
	resultsLength = 0;
	isLoadingResults = true;

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(private _accounts: AccountService) {}

	ngAfterViewInit(): void {
		this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

		merge(this.sort.sortChange, this.paginator.page)
			.pipe(
				startWith({}),
				switchMap(() => {
					this.isLoadingResults = true;
					const { pageIndex, pageSize } = this.paginator;
					return this._accounts
						.getAllAccounts({
							page: pageIndex,
							size: pageSize,
							searchTerm: '',
						})
						.pipe(catchError(() => ObservableOf(null)));
				}),
				map((resp) => {
					this.isLoadingResults = false;
					if (!resp) return [];
					const data = (resp as IApiResponse<any>)
						.data as IPagedData<any>;
					this.resultsLength = data.totalCount;
					return data.records;
				})
			)
			.subscribe((data) => (this.resultData = data));
	}
}
