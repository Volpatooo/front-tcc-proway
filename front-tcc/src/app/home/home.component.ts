import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from '../shred/menu/menu.component';
import { FooterComponent } from '../shred/footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [
    MenubarModule,
    RouterModule,
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
 