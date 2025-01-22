import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViacepService } from '../services/viacep.service';

@Component({
  selector: 'app-cadastro-cliente',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent implements OnInit {
  
  form: FormGroup = new FormGroup ({});

  constructor(private fb: FormBuilder, private viacepService: ViacepService) {}

  ngOnInit(): void {
    this.iniciarFormulario();
    this.cepPreenchido();
  }

  iniciarFormulario() {
    this.form = this.fb.group({
      cep: ['', [Validators.required]],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    })
  }

  cepPreenchido(){
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if (value?.length == 8) {
        this.buscarCep();
      }
    })
  }

  buscarCep(){
    var cep = this.form.get('cep')?.value;
    this.viacepService.buscaEndereco(cep).subscribe(
      {
        next: (response) => {
          this.form.patchValue({
            logradouro: response.logradouro,
            bairro: response.bairro,
            cidade: response.localidade,
            estado: response.uf,
          })
          },
        error: () => {
          console.log("Erro ao buscar o CEP.")
        }
      }
    )
  }
}
