import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ICreateAccount } from '../../dto/icreate-account.dto';
import { AccountService } from '../../services/account.service';

@Component({
	selector: 'app-account-form',
	standalone: true,
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
	],
	templateUrl: './account-form.component.html',
	styleUrl: './account-form.component.scss',
})
export class AccountFormComponent {
	accountForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		ammount: new FormControl(0, [Validators.required]),
	});

	constructor(private _accountService: AccountService) {}

	create() {
		const account: ICreateAccount = this.accountForm
			.value as ICreateAccount;
		this._accountService.createAccount(account);
	}
}
