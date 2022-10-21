import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Banque } from '../models/banque';
import { CompteBancaire } from '../models/compteBancaire';
import { Mouvement } from '../models/mouvement';
import { Societe } from '../models/societe';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //url pour les banques
  baseUrlListBanque = 'http://localhost:8080/banque/list';
  baseUrlAddBanque = 'http://localhost:8080/banque/add';
  //url pour les societés
  baseUrlListSociete = 'http://localhost:8080/societe/list';
  baseUrlAddSociete = 'http://localhost:8080/societe/add';
  //url pour les comptes bancaires
  baseUrlListComptebancaire = 'http://localhost:8080/comptebancaire/list';
  baseUrlAddComptebancaire = 'http://localhost:8080/comptebancaire/add';
  //url pour les mouvements
  baseUrlListMouvement = 'http://localhost:8080/mouvement/list';
  baseUrlAddMouvement = 'http://localhost:8080/mouvement/add';
  //url pour les utilisateurs
  baseUrlSignup = 'http://localhost:8080/api/auth/signup';
  // baseUrlAddMouvement = 'http://localhost:8080/mouvement/add';

  baseUrlSearchBanque = 'http://localhost:8080/banque/findById';
  baseUrlUserList = 'http://localhost:8080/user/list';

  constructor(private http: HttpClient) {}
  // La liste des banques
  getBanqueList() {
    return this.http.get<any>(this.baseUrlListBanque);
  }
  // Ajout d'une banque
  addBanque(banque?: Banque): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlAddBanque}`, banque);
  }
  // La liste des societés
  getSocieteList() {
    return this.http.get<any>(this.baseUrlListSociete);
  }
  // Ajout d'une societe
  addSociete(societe?: Societe): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlAddSociete}`, societe);
  }

  // La liste des mouvements
  getMouvementList() {
    return this.http.get<any>(this.baseUrlListMouvement);
  }
  // Ajout d'un mouvement
  addMouvement(mouvement?: Mouvement): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlAddMouvement}`, mouvement);
  }
  // La liste des comptes bancaires
  getCompteBancaireList() {
    return this.http.get<any>(this.baseUrlListComptebancaire);
  }
  // Ajout d'un compte bancaire
  addCompteBancaire(compteBancaire?: CompteBancaire): Observable<Object> {
    return this.http.post<Object>(
      `${this.baseUrlAddComptebancaire}`,
      compteBancaire
    );
  }

  // Ajout d'un nouvel utilsateur
  addUser(user?: User): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlAddComptebancaire}`, user);
  }
  // Liste des utilisateurs
  getUserList() {
    return this.http.get<any>(this.baseUrlUserList);
  }
  // Recherche de nom de banque
  searchBanque(banque?: Banque): Observable<any> {
    return this.http.post<any>(`${this.baseUrlSearchBanque}`, banque);
  }
}
