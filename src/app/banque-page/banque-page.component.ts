import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banque-page',
  templateUrl: './banque-page.component.html',
  styleUrls: ['./banque-page.component.scss'],
})
export class BanquePageComponent implements OnInit {
  showModal = false;

  constructor() {}

  ngOnInit(): void {}
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
