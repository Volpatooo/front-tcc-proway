import { Component } from '@angular/core';
import { MenuComponent } from '../shred/menu/menu.component';
import { FooterComponent } from '../shred/footer/footer.component';

@Component({
  selector: 'app-diferenciais',
  imports: [
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './diferenciais.component.html',
  styleUrl: './diferenciais.component.scss'
})
export class DiferenciaisComponent {

}
