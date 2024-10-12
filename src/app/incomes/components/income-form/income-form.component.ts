import {
	AfterViewInit,
	Component,
	Inject,
	inject,
	OnInit,
	signal,
} from '@angular/core';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { TransactionFrequency } from '../../../shared/enums/transaction-frequency.enum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';
import { ActionButtonComponent } from '../../../shared/ui/action-button/action-button.component';
import { AccountService } from '../../../accounts/services/account.service';
import { IncomeService } from '../../services/income.service';
import { ISelectibleItem } from '../../../shared/models/iselectible-item.model';

@Component({
	selector: 'app-income-form',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatButtonModule,
		CurrencyMaskModule,
		ActionButtonComponent,
	],
	templateUrl: './income-form.component.html',
	styleUrl: './income-form.component.scss',
	providers: [IncomeService, AccountService],
})
export class IncomeFormComponent implements OnInit, AfterViewInit {
	incomeForm!: FormGroup;

	currencyMaskOptions: CurrencyMaskConfig = {
		align: 'left',
		allowNegative: false,
		prefix: 'RD$',
		suffix: ' pesos',
		thousands: ',',
		decimal: '.',
		precision: 2,
	};

	accounts$ = signal<ISelectibleItem[]>([]);
	private _accountService = inject(AccountService);

	constructor(private _incomeService: IncomeService) {}

	ngOnInit(): void {
		this.incomeForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			ammount: new FormControl(0, [Validators.required]),
			frequency: new FormControl(TransactionFrequency.ONE_TIME),
			accountId: new FormControl(0),
		});
	}

	ngAfterViewInit(): void {
		this.getAccounts();
	}

	private getAccounts() {
		this._accountService
			.getActiveAccounts()
			.subscribe((data: ISelectibleItem[]) => {
				this.accounts$.update(() => data);
			});
	}

	get frequencyArray() {
		return Object.entries(TransactionFrequency)
			.filter((v, i) => i < 5)
			.map((v) => ({
				id: parseInt(v[0]),
				name: v[1].toString().replaceAll('_', ' '),
			}));
	}

	create(event: any) {
		console.log('fire event');
		const {} = this.incomeForm.value;
	}
}
