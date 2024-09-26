import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { environment as dev } from '../../../environments/environment.dev';
import { environment as prod } from '../../../environments/environment.prod';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { IPaginationFilter } from '../dto/ipagination-filter.dto';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
	providedIn: 'root',
})
export abstract class GenericService {
	protected readonly endpoint!: string;

	protected readonly _snackBar = inject(MatSnackBar);
	protected readonly _snackBarConfig: MatSnackBarConfig = {
		announcementMessage: '',
		duration: 3000,
		direction: 'ltr',
		horizontalPosition: 'center',
		verticalPosition: 'bottom',
		politeness: 'polite',
	};

	protected dialogService = inject(MatDialog);
	protected dialogConfig: MatDialogConfig = {
		hasBackdrop: true,
		minHeight: 200,
		minWidth: 400,
		role: 'alertdialog',
	};

	constructor(protected readonly $http: HttpClient) {
		this.endpoint = `${
			isDevMode() ? dev.apiUrl : prod.apiUrl
		}/${this.getResourceUrl()}`;
	}

	abstract getResourceUrl(): string;

	getPaginationQueryParams(filters: IPaginationFilter) {
		const { page, size, searchTerm } = filters;
		return new HttpParams()
			.set('page', page)
			.set('size', size)
			.set('searchTerm', searchTerm ?? '');
	}
}
