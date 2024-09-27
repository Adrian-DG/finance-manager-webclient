import { Component } from '@angular/core';
import {
	MatDialogActions,
	MatDialogContent,
	MatDialogModule,
} from '@angular/material/dialog';

@Component({
	selector: 'app-edit-account-dialog',
	standalone: true,
	imports: [MatDialogModule, MatDialogContent, MatDialogActions],
	templateUrl: './edit-account-dialog.component.html',
	styleUrl: './edit-account-dialog.component.scss',
})
export class EditAccountDialogComponent {}
