import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { IPaginationFilter } from '../../dto/ipagination-filter.dto';

@Component({
	selector: 'app-resource-paginator',
	standalone: true,
	imports: [MatPaginatorModule, MatIconModule, MatButtonModule],
	templateUrl: './resource-paginator.component.html',
	styleUrl: './resource-paginator.component.scss',
})
export class ResourcePaginatorComponent {
	@Input() filter!: IPaginationFilter;
	@Input() totalCount!: number;
}
