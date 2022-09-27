import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  returnUrl!: string;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    console.log(this.form);
  }

  // onSubmit() {
  //   this.authService.login({ credentials: this.form }).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
  onSubmit(): void {
    console.log('ici');

    this.authService.login(this.form).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log('good');

        this.reloadPage();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log('pas bon');
      }
    );
  }
  // onSubmit(form: NgForm): void {
  //   console.log('ici');

  //   this.authService.newLogin({ loginData: form.value }).subscribe(
  //     (data) => {
  //       console.log(Response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  reloadPage(): void {
    window.location.reload();
  }
}
