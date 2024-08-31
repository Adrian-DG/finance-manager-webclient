import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { ILoginUser } from '../../dto/ilogin-user.dto';

@Component({
	selector: 'app-signin',
	standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
	],
	templateUrl: './signin.component.html',
	styleUrl: './signin.component.scss',
	providers: [AuthService],
})
export class SigninComponent {
	sigInDto: ILoginUser = {
		username: '',
		password: '',
	};

	constructor() {}
}
