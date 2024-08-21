import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-index',
	standalone: true,
	imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
	templateUrl: './index.component.html',
	styleUrl: './index.component.scss',
})
export class IndexComponent {}
