import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-grand-livre-add',
  templateUrl: './grand-livre-add.component.html',
  styleUrls: ['./grand-livre-add.component.scss'],
})
export class GrandLivreAddComponent implements OnInit {
  convertedJson!: string;
  worksheetHasHeader: any;

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
}
