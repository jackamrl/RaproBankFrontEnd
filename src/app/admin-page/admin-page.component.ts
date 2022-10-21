import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import {
  FormBuilder,
  FormGroup,
  NgForm,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  myForm!: any;
  public checks: Array<Object> = [
    { description: 'administrateur', value: 'admin' },
    { description: 'Modérateur', value: 'mod' },
  ];

  displayedColumns: string[] = ['username', 'email', 'roles', 'actions'];
  dataSource!: MatTableDataSource<any>;
  formControl!: FormControl;
  isLoadingCategory!: boolean;
  showModal = false;
  subscription!: Subscription;
  lesRoles!: ProductCategory[];
  // roles: string[] = ['user', 'admin', 'compt'];
  addUserForm!: FormGroup;
  roles = {
    user: 'user',
  };
  selectedRoleInfo!: number[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}
  toggleModal() {
    this.showModal = !this.showModal;
  }
  get f() {
    return this.addUserForm && this.addUserForm.controls;
  }

  get categoriesFormArr(): FormArray {
    return this.f && <FormArray>this.f['categoriesFormArr'];
  }

  get categoriesFormGroup(): FormGroup {
    return this.f && <FormGroup>this.f['categoriesFormGroup'];
  }

  get categoriesFormGroupSelectedIds(): string[] {
    let ids: string[] = [];
    for (var key in this.categoriesFormGroup.controls) {
      if (this.categoriesFormGroup.controls[key].value) {
        ids.push(key);
      }
    }
    return ids;
  }

  get categoriesFormArraySelectedIds(): string[] {
    return this.lesRoles
      .filter((cat, catIdx) =>
        this.categoriesFormArr.controls.some(
          (control, controlIdx) => catIdx === controlIdx && control.value
        )
      )
      .map((cat) => cat.id);
  }

  ngOnInit(): void {
    this.getAllUser();
    this.isLoadingCategory = true;
    this.addUserForm = this.formBuilder.group({
      userame: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.getCategories().subscribe((categories) => {
      this.isLoadingCategory = false;
      this.lesRoles = categories;
      this.addUserForm.addControl(
        'categoriesFormArr',
        this.buildCategoryFormArr(categories)
      );
      this.addUserForm.addControl(
        'categoriesFormGroup',
        this.buildCategoryFormGroup(categories)
      );
    });
  }

  getAllUser() {
    this.api.getUserList().subscribe({
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

  buildCategoryFormArr(
    categories: ProductCategory[],
    selectedCategoryIds: string[] = []
  ): FormArray {
    const controlArr = categories.map((category) => {
      let isSelected = selectedCategoryIds.some((id) => id === category.id);
      return this.formBuilder.control(isSelected);
    });
    return this.formBuilder.array(controlArr);
  }

  buildCategoryFormGroup(
    categories: ProductCategory[],
    selectedCategoryIds: string[] = []
  ): FormGroup {
    let group = this.formBuilder.group({});
    categories.forEach((category) => {
      let isSelected = selectedCategoryIds.some((id) => id === category.id);
      group.addControl(category.id, this.formBuilder.control(isSelected));
    });
    return group;
  }

  //Ajout d'une nouvel utilsateur
  public addUser() {
    console.log(this.addUserForm);

    // if (form.valid) {
    //   this.api.addUser(form.value).subscribe({
    //     next: (res) => {
    //       alert('Utilisateur ajouté avec succes');
    //       form.reset();
    //       this.showModal = !this.showModal;
    //     },
    //     error: (err) => {
    //       alert("Erreur lors de l'ajout");
    //     },
    //   });
    // }
  }
  getCategories(): Observable<ProductCategory[]> {
    let lesRoles: ProductCategory[] = [
      {
        id: 'educationCatId',
        title: 'Education & Reference',
      },
      {
        id: 'lifestyleCatId',
        title: 'Lifestyle & Hobbies',
      },
      {
        id: 'businessCatId',
        title: 'Business & Office',
      },
    ];
    return of(lesRoles).pipe(delay(1000));
  }
}

interface ProductCategory {
  id: string;
  title: string;
}
