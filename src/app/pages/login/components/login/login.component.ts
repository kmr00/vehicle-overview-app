import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidator} from "../../../../shared/util/validators/passwordValidator";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {UnsubscribeService} from "../../../../services/unsubscribe.service";
import {LoginCommand} from "../../../../core/models/login.command";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | undefined = '';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private unsubscribe: UnsubscribeService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: ['', [
        Validators.required,
        PasswordValidator.validatePassword()
      ]]
    });
    this.loginForm.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  onLoginSubmit(): void {
    this.isLoading = true;
    const command: LoginCommand = this.loginForm.value;
    this.authService.login(command).pipe(this.unsubscribe.untilDestroyed)
      .subscribe(response => {
        this.isLoading = false;
        if (response.success) {
          this.router.navigate(['/vehicle']);
        } else {
          this.errorMessage = response.message;
        }
      });
  }
}
