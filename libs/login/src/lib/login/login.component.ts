import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginBuilderForm!: FormGroup;
  constructor(public fb: FormBuilder) {
   
  }

  ngOnInit() {
    this.loginBuilderForm = this.fb.group({
      userName: [''],
      password: [''],
    });
}

  // loginForm = new FormGroup({
  //   userName: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(5),
  //   ]),
  // });

  loginSubmit() {
    console.log(this.loginBuilderForm.value);
  }
}
