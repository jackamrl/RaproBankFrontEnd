import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-societe-page',
  templateUrl: './societe-page.component.html',
  styleUrls: ['./societe-page.component.scss'],
})
export class SocietePageComponent implements OnInit {
  showModal = false;
  displayedColumns: string[] = ['libelleSociete', 'description'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.getAllSociete();
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }

  //liste de toutes les societes
  getAllSociete() {
    this.api.getSocieteList().subscribe({
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

  // Ajout d'une nouvelle societé
  public addSociete(form: NgForm) {
    console.log(form.value);
    //Verification si le formulaire est valide
    if (form.valid) {
      this.api.addSociete(form.value).subscribe({
        next: (res) => {
          alert('Societé ajoutée avec succes');
          form.reset();
          this.showModal = !this.showModal;
          this.getAllSociete();
        },
        error: (err) => {
          alert("Erreur lors de l'ajout");
        },
      });
    }
  }
}
