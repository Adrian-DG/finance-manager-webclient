import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
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
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
	providers: [
		AccountService,
		{ provide: MatDialog, useValue: {} },
		{ provide: MatDialogRef, useValue: {} },
	],
	templateUrl: './list.component.html',
	styleUrl: './list.component.scss',
})
export class ListComponent
	extends BaseListResource<IAccountDetail>
	implements OnInit, AfterViewInit
{
	constructor(
		protected override _confirmDialog: MatDialog,
		protected override _confirmDialogRef: MatDialogRef<ConfirmDialogComponent>,
		private readonly _accountService: AccountService
	) {
		super(_confirmDialog, _confirmDialogRef);
	}

	ngOnInit(): void {
		this.loadData();
	}

	ngAfterViewInit(): void {}

	loadData() {
		this._accountService
			.getAllAccounts(this.filters$())
			.subscribe((data: IPagedData<IAccountDetail>) => {
				this.records$.set(data.records);
				this.totalCount$.set(data.totalCount);
			});
	}

	onItemDeleteClick(event: any) {
		console.log('Account Id: ', event);
		// this.currentRecordId$.set(parseInt(event));
		// this._confirmDialog.open(ConfirmDialogComponent, {
		// 	...this.dialogConfig,
		// 	data: {
		// 		title: 'Delete record',
		// 		body: 'The following record will be removed, which to continue ?',
		// 	},
		// });

		// this._confirmDialogRef.componentInstance.onConfirmEvent.subscribe(
		// 	(isConfirm: boolean) => {
		// 		if (isConfirm) {
		// 			this._accountService.deleteAccount(this.currentRecordId$());
		// 		}
		// 	}
		// );

		// this._confirmDialogRef
		// 	.afterClosed()
		// 	.subscribe(() => this.currentRecordId$.update(() => 0));
	}
}
