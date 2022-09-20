import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societe-page',
  templateUrl: './societe-page.component.html',
  styleUrls: ['./societe-page.component.scss'],
})
export class SocietePageComponent implements OnInit {
  showModal = false;
  constructor() {}

  ngOnInit(): void {}
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
