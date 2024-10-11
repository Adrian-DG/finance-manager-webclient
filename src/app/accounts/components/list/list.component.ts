import { CommonModule } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	OnInit,
	signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ResourceListComponent } from '../../../shared/ui/resource-list/resource-list.component';
import { AccountService } from '../../services/account.service';
import { IPagedData } from '../../../shared/models/ipaged-data.model';
import { IAccountDetail } from '../../models/iaccount-detail.model';
import { ResourcePaginatorComponent } from '../../../shared/ui/resource-paginator/resource-paginator.component';
import { BaseListResource } from '../../../shared/base-list-resource.metadata';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [
		CommonModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		ResourceListComponent,
		ResourcePaginatorComponent,
	],
	providers: [AccountService],
	templateUrl: './list.component.html',
	styleUrl: './list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent
	extends BaseListResource<IAccountDetail>
	implements OnInit, AfterViewInit
{
	constructor(
		protected override _confirmDialog: MatDialog,
		private readonly _accountService: AccountService
	) {
		super(_confirmDialog);
	}

	ngOnInit(): void {
		this.loadData();
	}

	ngAfterViewInit(): void {}

	loadData() {
		this._accountService
			.getAllAccounts(this.filters$())
			.subscribe((data: IPagedData<IAccountDetail>) => {
				const { records, totalCount } = data;
				this.records$.set(records);
				this.totalCount$.set(totalCount);
			});
	}

	onDeleteEvent(event: any) {
		const currentRecordId = parseInt(event);
		this.showConfirmDialog();
		this.confirmDialogRef.componentInstance.onConfirmEvent.subscribe(
			(value: boolean) =>
				this._accountService.deleteAccount(currentRecordId)
		);
	}
}
