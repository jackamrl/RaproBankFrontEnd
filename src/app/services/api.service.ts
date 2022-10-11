import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Banque } from '../models/banque';
import { CompteBancaire } from '../models/compteBancaire';
import { Societe } from '../models/societe';

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
  // La liste des comptes bancaires
  getCompteBancaireList() {
    return this.http.get<any>(this.baseUrlListComptebancaire);
  }
  // Ajout d'un compte bancaire
  addCompteBancaire(compteBancaire?: CompteBancaire): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlAddBanque}`, compteBancaire);
  }
}
