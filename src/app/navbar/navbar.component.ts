import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

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
  showUserBoard = false;
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
  toggleBankSocietyOut() {
    this.ShowBankSociety = false;
    this.Show = false;
    this.ShowAccount = false;
  }
  toggleAccount() {
    this.ShowAccount = !this.ShowAccount;
    this.ShowBankSociety = false;
    this.Show = false;
  }

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAccountingBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
    if (this.isLoggedIn!) {
      console.log('gnawo');
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['/login']);
    console.log('username =' + this.username);
  }
}
