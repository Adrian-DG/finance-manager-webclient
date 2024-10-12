import { TransactionFrequency } from '../../shared/enums/transaction-frequency.enum';

export interface ICreateIncome {
	name: string;
	ammount: number;
	frequency: TransactionFrequency;
	accountId: number;
}
