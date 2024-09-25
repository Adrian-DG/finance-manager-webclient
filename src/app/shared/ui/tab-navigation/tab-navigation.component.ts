import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { IUrlOption } from '../../models/Iurl-option.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-tab-navigation',
	standalone: true,
	imports: [CommonModule, RouterModule, MatTabsModule, MatCardModule],
	templateUrl: './tab-navigation.component.html',
	styleUrl: './tab-navigation.component.scss',
})
export class TabNavigationComponent {
	@Input() title!: string;
	@Input() description!: string;
	@Input() links!: IUrlOption[];
	activeLinkIndex = 0;

	constructor(private $router: Router) {}

	isLinkActive(index: number) {
		return index == this.activeLinkIndex;
	}

	navToTab(link: IUrlOption, index: number) {
		console.log(link);
		this.$router.navigate([link.url]);
		this.activeLinkIndex = index;
	}
}
