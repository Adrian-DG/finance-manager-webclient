import { Component } from '@angular/core';
import { TabNavigationComponent } from '../../../shared/ui/tab-navigation/tab-navigation.component';
import { IUrlOption } from '../../../shared/models/Iurl-option.model';
import { PageIntroComponent } from '../../../shared/ui/page-intro/page-intro.component';

@Component({
	selector: 'app-index',
	standalone: true,
	imports: [TabNavigationComponent, PageIntroComponent],
	templateUrl: './index.component.html',
	styleUrl: './index.component.scss',
})
export class IndexComponent {
	links: IUrlOption[] = [
		{ url: '/accounts/all', name: 'accounts list' },
		{ url: '/accounts/create', name: 'accounts formulary' },
	];
}
