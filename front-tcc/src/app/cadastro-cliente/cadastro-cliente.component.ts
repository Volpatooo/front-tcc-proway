import { Component } from '@angular/core';
import { MenuComponent } from '../shred/menu/menu.component';
import { FooterComponent } from '../shred/footer/footer.component';

@Component({
  selector: 'app-cadastro-cliente',
  imports: [
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent {

}
