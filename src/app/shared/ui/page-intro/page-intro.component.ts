import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
	selector: 'app-page-intro',
	standalone: true,
	imports: [MatCardModule, CommonModule, MatTableModule],
	templateUrl: './page-intro.component.html',
	styleUrl: './page-intro.component.scss',
})
export class PageIntroComponent {
	@Input() pageTitle!: string;
	@Input() subText!: string;
}
