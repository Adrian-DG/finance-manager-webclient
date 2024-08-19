import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LinkListComponent } from './shared/ui/link-list/link-list.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatSidenavModule,
		LinkListComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'finance-manager-webclient';

	isSidenavOpen = false;

	toogleSidenav() {
		this.isSidenavOpen = !this.isSidenavOpen;
	}
}
