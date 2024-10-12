import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-action-button',
	standalone: true,
	imports: [MatButtonModule],
	templateUrl: './action-button.component.html',
	styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
	@Input() confirmTxt!: string;
	@Input() IsValid!: boolean;
	@Output() confirmEvent = new EventEmitter();

	confirm() {
		this.confirmEvent.emit();
	}
}
