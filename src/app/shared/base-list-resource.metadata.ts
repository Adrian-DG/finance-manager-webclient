import { inject, signal } from '@angular/core';
import { IPaginationFilter } from './dto/ipagination-filter.dto';
import { IPagedData } from './models/ipaged-data.model';
import {
	MatDialog,
	MatDialogConfig,
	MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './ui/confirm-dialog/confirm-dialog.component';

export abstract class BaseListResource<T> {
	protected filters$ = signal<IPaginationFilter>({
		page: 1,
		size: 10,
		searchTerm: '',
	});
	protected records$ = signal<T[]>([]);
	protected totalCount$ = signal<number>(0);
	protected currentRecordId$ = signal<number>(0);

	protected dialogConfig: MatDialogConfig = {
		hasBackdrop: true,
		minHeight: 200,
		minWidth: 400,
		role: 'alertdialog',
	};

	constructor(
		protected _confirmDialog: MatDialog,
		protected _confirmDialogRef: MatDialogRef<ConfirmDialogComponent>
	) {}

	abstract onItemDeleteClick(id: number): void;

	abstract loadData(): void;
}
