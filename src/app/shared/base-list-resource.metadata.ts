import { Component, inject, signal } from '@angular/core';
import { IPaginationFilter } from './dto/ipagination-filter.dto';
import { IPagedData } from './models/ipaged-data.model';
import { ConfirmDialogComponent } from './ui/confirm-dialog/confirm-dialog.component';
import {
	MatDialog,
	MatDialogConfig,
	MatDialogRef,
} from '@angular/material/dialog';

export abstract class BaseListResource<T> {
	protected filters$ = signal<IPaginationFilter>({
		page: 1,
		size: 10,
		searchTerm: '',
	});
	protected records$ = signal<T[]>([]);
	protected totalCount$ = signal<number>(0);

	protected dialogConfig: MatDialogConfig = {
		hasBackdrop: true,
		minHeight: 200,
		minWidth: 400,
		role: 'alertdialog',
	};

	protected confirmDialogRef!: MatDialogRef<ConfirmDialogComponent>;

	constructor(protected _confirmDialog: MatDialog) {}

	showConfirmDialog(): void {
		this.confirmDialogRef = this._confirmDialog.open(
			ConfirmDialogComponent,
			{
				...this.dialogConfig,
			}
		);
	}

	abstract onDeleteEvent(event: any): void;

	abstract loadData(): void;
}
