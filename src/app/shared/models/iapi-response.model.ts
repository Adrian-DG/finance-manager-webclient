export interface IApiResponse<T> {
	title: string;
	message: string;
	status: boolean;
	code: number;
	data: T | any;
}
