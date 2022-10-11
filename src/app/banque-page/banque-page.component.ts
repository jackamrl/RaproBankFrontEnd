import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBanqueFormComponent } from '../add-banque-form/add-banque-form.component';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-banque-page',
  templateUrl: './banque-page.component.html',
  styleUrls: ['./banque-page.component.scss'],
})
export class BanquePageComponent implements OnInit {
  showModal = false;
  displayedColumns: string[] = ['libelleBanque', 'description'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.getAllBanque();
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }

  //liste de toutes les banques
  getAllBanque() {
    this.api.getBanqueList().subscribe({
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // toggleModal() {
  //   this.dialog.open(AddBanqueFormComponent, {
  //     width: '50%',
  //     height: '50%',
  //   });
  // }

  //Ajout d'une nouvelle banque
  public addBanque(form: NgForm) {
    console.log(form.value);

    if (form.valid) {
      this.api.addBanque(form.value).subscribe({
        next: (res) => {
          alert('Banque ajoutée avec succes');
          form.reset();
          this.showModal = !this.showModal;
          this.getAllBanque();
        },
        error: (err) => {
          alert("Erreur lors de l'ajout");
        },
      });
    }
  }
}
