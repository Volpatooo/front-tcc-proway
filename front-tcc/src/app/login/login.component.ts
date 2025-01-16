import { Component } from '@angular/core';
import { MenuComponent } from '../shred/menu/menu.component';
import { FooterComponent } from '../shred/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MenuComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
