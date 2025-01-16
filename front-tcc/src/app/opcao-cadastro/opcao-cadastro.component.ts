import { Component } from '@angular/core';
import { MenuComponent } from '../shred/menu/menu.component';
import { FooterComponent } from '../shred/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-opcao-cadastro',
  imports: [
    MenuComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './opcao-cadastro.component.html',
  styleUrl: './opcao-cadastro.component.scss'
})
export class OpcaoCadastroComponent {

}
