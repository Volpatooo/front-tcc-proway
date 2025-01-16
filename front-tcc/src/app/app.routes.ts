import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre',component: SobreComponent },
    { path: 'localizacao',component: LocalizacaoComponent },
    { path: 'diferenciais', component: DiferenciaisComponent },
    { path: '**', redirectTo: '/home' },
];
