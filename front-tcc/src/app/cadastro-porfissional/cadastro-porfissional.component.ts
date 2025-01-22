import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-porfissional',
  imports: [
    FormsModule, 
    PasswordModule,
  ],
  templateUrl: './cadastro-porfissional.component.html',
  styleUrl: './cadastro-porfissional.component.scss'
})
export class CadastroPorfissionalComponent {
  value!: string;
}
