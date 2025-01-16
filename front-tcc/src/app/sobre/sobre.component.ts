import { Component } from '@angular/core';
import { MenuComponent } from '../shred/menu/menu.component';
import { FooterComponent } from '../shred/footer/footer.component';


@Component({
  selector: 'app-sobre',
  imports: [
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
