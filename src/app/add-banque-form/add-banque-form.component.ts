import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-banque-form',
  templateUrl: './add-banque-form.component.html',
  styleUrls: ['./add-banque-form.component.scss'],
})
export class AddBanqueFormComponent implements OnInit {
  showModal = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddBanqueFormComponent>
  ) {}

  ngOnInit(): void {}
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
