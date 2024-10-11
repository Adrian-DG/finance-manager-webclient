import { Component } from '@angular/core';
import { PageIntroComponent } from '../../../shared/ui/page-intro/page-intro.component';
import { TabNavigationComponent } from '../../../shared/ui/tab-navigation/tab-navigation.component';
import { IUrlOption } from '../../../shared/models/Iurl-option.model';

@Component({
	selector: 'app-index',
	standalone: true,
	imports: [PageIntroComponent, TabNavigationComponent],
	templateUrl: './index.component.html',
	styleUrl: './index.component.scss',
})
export class IndexComponent {
	links: IUrlOption[] = [
		{ url: '/incomes/all', name: 'incomes list' },
		{ url: '/incomes/create', name: 'income formulary' },
	];
}
