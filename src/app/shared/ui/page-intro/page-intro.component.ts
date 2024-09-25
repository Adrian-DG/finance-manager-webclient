import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-page-intro',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './page-intro.component.html',
	styleUrl: './page-intro.component.scss',
})
export class PageIntroComponent {
	@Input() title!: string;
	@Input() description!: string;
}
