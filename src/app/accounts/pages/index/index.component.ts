import { Component } from '@angular/core';
import { TabNavigationComponent } from '../../../shared/ui/tab-navigation/tab-navigation.component';
import { IUrlOption } from '../../../shared/models/Iurl-option.model';

@Component({
	selector: 'app-index',
	standalone: true,
	imports: [TabNavigationComponent],
	templateUrl: './index.component.html',
	styleUrl: './index.component.scss',
})
export class IndexComponent {
	links: IUrlOption[] = [
		{ url: '/accounts/all', name: 'list' },
		{ url: '/accounts/create', name: 'form' },
	];
}
