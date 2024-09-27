import { Component, Input, TemplateRef } from '@angular/core';
import {
	MatDialogActions,
	MatDialogContent,
	MatDialogModule,
	MatDialogTitle,
} from '@angular/material/dialog';

@Component({
	selector: 'app-resource-general-dialog',
	standalone: true,
	imports: [
		MatDialogModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
	],
	templateUrl: './resource-general-dialog.component.html',
	styleUrl: './resource-general-dialog.component.scss',
})
export class ResourceGeneralDialogComponent {
	@Input() title!: string;
	@Input() contentHtml!: TemplateRef<any>;
	@Input() actionsHtml!: TemplateRef<any>;
}
