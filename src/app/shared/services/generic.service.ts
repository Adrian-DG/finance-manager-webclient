import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
import { environment as dev } from '../../../environments/environment.dev';
import { environment as prod } from '../../../environments/environment.prod';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

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

	constructor(protected readonly $http: HttpClient) {
		this.endpoint = `${
			isDevMode() ? dev.apiUrl : prod.apiUrl
		}/${this.getResourceUrl()}`;
	}

	abstract getResourceUrl(): string;
}
