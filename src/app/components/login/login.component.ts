import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { Creds } from 'src/app/models/Creds';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  //convenient getter
  get formy() { return this.loginForm.controls }

  onSubmit() {
    //Creds= new Creds(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login2(this.loginForm.value).pipe(first()).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.alertService.fail('Incorrect username or password');
      }
    );
  }
}
