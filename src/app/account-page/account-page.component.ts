import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import { Banque } from '../models/banque';
import { BanquePageComponent } from '../banque-page/banque-page.component';
import { Societe } from '../models/societe';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  convertedJson!: string;
  worksheetHasHeader: any;
  showModal = false;
  banques!: Banque[];
  societes!: Societe[];

  displayedColumns: string[] = [
    'libelleCompte',
    'numCompte',
    'libelleSociete',
    'libelleBanque',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.getAllAccount();
    this.getAllBanque();
    this.getAllSociete();
  }

  fileUpload(event: any) {
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event: any) => {
      console.log(event);
      let binaryData = event.target.result;
      let workBook = XLSX.read(binaryData, { type: 'binary' });
      workBook.SheetNames.forEach((sheet) => {
        const data = XLSX.utils.sheet_to_json(workBook.Sheets[sheet], {
          raw: false,
          // header: this.worksheetHasHeader ? 0 : 1,
          dateNF: 'dd/mm/yyyy',
        });
        console.log(data);

        this.convertedJson = JSON.stringify(data, undefined, 4);
      });
      console.log(workBook);
    };
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
  //liste de tous les comptes bancaires
  getAllAccount() {
    this.api.getCompteBancaireList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log('error while fetching');
      },
    });
  }

  //Ajout d'une nouvelle banque
  public addAccount(form: NgForm) {
    console.log(form.value);

    if (form.valid) {
      this.api.addCompteBancaire(form.value).subscribe({
        next: (res) => {
          alert('Compte bancaire ajoutée avec succes');
          form.reset();
          this.showModal = !this.showModal;
          this.getAllAccount();
        },
        error: (err) => {
          alert("Erreur lors de l'ajout");
        },
      });
    }
  }
  //Lite des banques
  getAllBanque() {
    this.api.getBanqueList().subscribe({
      next: (res) => {
        this.banques = res;
      },
      error: (err) => {
        alert('error while fetching');
      },
    });
  }
  //Lite des societes
  getAllSociete() {
    this.api.getSocieteList().subscribe({
      next: (res) => {
        this.societes = res;
      },
      error: (err) => {
        alert('error while fetching');
      },
    });
  }

  public searchBanque(idBanque: Banque | undefined) {
    const nomBanque = this.api.searchBanque(idBanque).subscribe({
      next: (res) => {},
      error: (err) => {},
    });
  }
}
