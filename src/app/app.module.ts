import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { OperationPageComponent } from './operation-page/operation-page.component';
import { StatePageComponent } from './state-page/state-page.component';
import { LoginComponent } from './login/login.component';
import { GrandLivreAddComponent } from './grand-livre-add/grand-livre-add.component';
import { ExtraitBancaireAddComponent } from './extrait-bancaire-add/extrait-bancaire-add.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { AddCompteBancaireComponent } from './add-compte-bancaire/add-compte-bancaire.component';
import { BanquePageComponent } from './banque-page/banque-page.component';
import { SocietePageComponent } from './societe-page/societe-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBanqueFormComponent } from './add-banque-form/add-banque-form.component';
import { GrandLivreImportComponent } from './grand-livre-import/grand-livre-import.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AccountPageComponent,
    OperationPageComponent,
    StatePageComponent,
    LoginComponent,
    GrandLivreAddComponent,
    ExtraitBancaireAddComponent,
    MouvementComponent,
    AddCompteBancaireComponent,
    BanquePageComponent,
    SocietePageComponent,
    LoginPageComponent,
    AddBanqueFormComponent,
    GrandLivreImportComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
