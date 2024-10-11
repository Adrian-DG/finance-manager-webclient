import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
	selector: 'app-resource-list',
	standalone: true,
	imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
	templateUrl: './resource-list.component.html',
	styleUrl: './resource-list.component.scss',
})
export class ResourceListComponent {
	@Input() id!: number;
	@Input() avatar!: string;
	@Input() title!: string;
	@Input() description!: string;
	@Input() ammount!: number;

	@Output('onDelete') onDeleteEvent = new EventEmitter<number>();

	get initialLetter() {
		return this.avatar.charAt(0);
	}

	delete() {
		this.onDeleteEvent.emit(this.id);
	}
}
