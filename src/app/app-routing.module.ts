import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { BanquePageComponent } from './banque-page/banque-page.component';
import { ExtraitBancaireAddComponent } from './extrait-bancaire-add/extrait-bancaire-add.component';
import { GrandLivreAddComponent } from './grand-livre-add/grand-livre-add.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { SocietePageComponent } from './societe-page/societe-page.component';
import { StatePageComponent } from './state-page/state-page.component';
import { AuthGuard } from './_helpers/auth.gard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'comptes',
    component: AccountPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'etats', component: StatePageComponent, canActivate: [AuthGuard] },
  {
    path: 'ajoutGl',
    component: GrandLivreAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ajoutEb',
    component: ExtraitBancaireAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mouvement',
    component: MouvementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'societe',
    component: SocietePageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'banque', component: BanquePageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
