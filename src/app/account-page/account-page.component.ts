import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  convertedJson!: string;
  worksheetHasHeader: any;
  showModal = false;
  constructor() {}

  ngOnInit(): void {}

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
}
