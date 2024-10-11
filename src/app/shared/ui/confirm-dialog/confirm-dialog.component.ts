import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';

@Component({
	selector: 'app-confirm-dialog',
	standalone: true,
	imports: [CommonModule, MatDialogModule, MatButtonModule],
	templateUrl: './confirm-dialog.component.html',
	styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
	constructor(public _dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

	title = 'Delete record';
	body = 'The following record will be removed, which to continue ?';

	@Output('confirm') onConfirmEvent = new EventEmitter<boolean>();

	confirm() {
		this.onConfirmEvent.emit(true);
		this._dialogRef.close();
	}
}
