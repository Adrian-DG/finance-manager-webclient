export interface IPagedData<T> {
	page: number;
	size: number;
	records: T[];
	totalCount: number;
}
