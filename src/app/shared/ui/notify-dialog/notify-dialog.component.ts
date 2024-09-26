import { Component, inject } from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogContent,
	MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-notify-dialog',
	standalone: true,
	imports: [MatDialogTitle, MatDialogContent, MatIconModule],
	templateUrl: './notify-dialog.component.html',
	styleUrl: './notify-dialog.component.scss',
})
export class NotifyDialogComponent {
	data: { title: string; message: string; status: boolean } =
		inject(MAT_DIALOG_DATA);
}
