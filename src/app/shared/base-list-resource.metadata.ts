import { signal } from '@angular/core';
import { IPaginationFilter } from './dto/ipagination-filter.dto';
import { IPagedData } from './models/ipaged-data.model';

export abstract class BaseListResource<T> {
	protected filters$ = signal<IPaginationFilter>({
		page: 1,
		size: 10,
		searchTerm: '',
	});
	protected records$ = signal<T[]>([]);
	protected totalCount$ = signal<number>(0);
}
