import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { environment as dev } from '../../../environments/environment.dev';
import { environment as prod } from '../../../environments/environment.prod';

@Injectable({
	providedIn: 'root',
})
export abstract class GenericService {
	protected readonly endpoint!: string;
	constructor(protected readonly $http: HttpClient) {
		this.endpoint = `${
			isDevMode() ? dev.apiUrl : prod.apiUrl
		}/${this.getResourceUrl()}`;
	}

	abstract getResourceUrl(): string;
}
