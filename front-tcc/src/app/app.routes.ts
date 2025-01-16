import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { OpcaoCadastroComponent } from './opcao-cadastro/opcao-cadastro.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroPorfissionalComponent } from './cadastro-porfissional/cadastro-porfissional.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre',component: SobreComponent },
    { path: 'localizacao',component: LocalizacaoComponent },
    { path: 'diferenciais', component: DiferenciaisComponent },
    { path: 'login', component: LoginComponent },
    { path: 'opcao-cadastro', component: OpcaoCadastroComponent },
    { path: 'cadastro-cliente', component: CadastroClienteComponent },
    { path: 'cadastro-profissional', component: CadastroPorfissionalComponent },
    { path: '**', redirectTo: '/home' },
];
