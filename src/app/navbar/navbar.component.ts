import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  Show: boolean = false;
  ShowBankSociety: boolean = false;
  ShowAccount: boolean = false;

  private roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showAccountingBoard = false;
  username!: string;

  toggle() {
    this.Show = !this.Show;
    this.ShowBankSociety = false;
    this.ShowAccount = false;
  }
  toggleBankSociety() {
    this.ShowBankSociety = !this.ShowBankSociety;
    this.Show = false;
    this.ShowAccount = false;
  }
  toggleAccount() {
    this.ShowAccount = !this.ShowAccount;
    this.ShowBankSociety = false;
    this.Show = false;
  }

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAccountingBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
