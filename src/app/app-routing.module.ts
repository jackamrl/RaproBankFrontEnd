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

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'comptes', component: AccountPageComponent },
  { path: 'etats', component: StatePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'ajoutGl', component: GrandLivreAddComponent },
  { path: 'ajoutEb', component: ExtraitBancaireAddComponent },
  { path: 'mouvement', component: MouvementComponent },
  { path: 'societe', component: SocietePageComponent },
  { path: 'banque', component: BanquePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
