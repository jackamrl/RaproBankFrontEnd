import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  Show: boolean = false;
  Showsecond: boolean = false;
  toggle() {
    this.Show = !this.Show;
    this.Showsecond = false;
  }
  togglesecond() {
    this.Showsecond = !this.Showsecond;
    this.Show = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
