import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
	selector: 'app-index',
	standalone: true,
	imports: [],
	templateUrl: './index.component.html',
	styleUrl: './index.component.scss',
	providers: [AccountService],
})
export class IndexComponent implements OnInit {
	constructor(private _accounts: AccountService) {}

	ngOnInit(): void {
		this.getAccounts();
	}

	getAccounts() {
		this._accounts
			.getAllAccounts()
			.subscribe((response) => console.log(response));
	}
}
