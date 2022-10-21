import { Component, OnInit, ViewChild } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as XLSX from 'xlsx';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { BanquePageComponent } from '../banque-page/banque-page.component';
import { CompteBancaire } from '../models/compteBancaire';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grand-livre-add',
  templateUrl: './grand-livre-add.component.html',
  styleUrls: ['./grand-livre-add.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class GrandLivreAddComponent implements OnInit {
  grandlivreForm!: FormGroup;
  myData: any;
  // data: Object[] = [{ type: 'grand livre' }];
  convertedJson!: string;
  worksheetHasHeader: any;
  compteBancaires!: CompteBancaire[];
  months: string[] = [
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  types: string[] = [
    'grand livre',
    'grand livre',
    'grand livre',
    'grand livre',
  ];
  years: number[] = [2022, 2021, 2020, 2019, 2018, 2017];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  constructor(
    private _formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ComptesBancaireList();
    this.grandlivreForm = this.formBuilder.group({
      companyName: ['', Validators.required],
    });
  }

  public fileUpload(event: any) {
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
        this.myData = data;

        this.convertedJson = JSON.stringify(data, undefined, 4);
      });
      console.log(workBook);
    };
  }
  //Ajout d'un nouveau extrait de gran livre
  public addGrandLivre(form: NgForm) {
    // this.router.navigate(['/import']);
    console.log(form.value);

    if (form.valid) {
      this.api.addMouvement(form.value).subscribe({
        next: (res) => {
          alert('Extrait de grand livre ajouté avec succes');
          form.reset();
        },
        error: (err) => {
          alert("Erreur lors de l'ajout");
        },
      });
    }
  }
  //importation d'un nouveau extrait de gran livre
  public importGrandLivre(form: NgForm) {
    console.log('ah bon');
    console.log(this.convertedJson);
  }

  //Liste des comptes bancaires
  ComptesBancaireList() {
    this.api.getCompteBancaireList().subscribe({
      next: (res) => {
        this.compteBancaires = res;
      },
      error: (err) => {
        alert('Error while fetching');
      },
    });
  }
}
