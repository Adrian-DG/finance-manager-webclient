import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IUrlOption } from '../../models/Iurl-option.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-link-list',
	standalone: true,
	imports: [
		MatListModule,
		MatIconModule,
		MatDividerModule,
		RouterLink,
		RouterLinkActive,
	],
	templateUrl: './link-list.component.html',
	styleUrl: './link-list.component.scss',
})
export class LinkListComponent {
	sidenavOptions: IUrlOption[] = [
		{ name: 'Accounts', url: '/accounts' },
		{ name: 'Incomes', url: '/incomes' },
	];
}
