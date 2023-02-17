import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          // Validators.pattern(),
        ],
      ],
      email: [
        '',
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
      username: [
        '',
        [
          Validators.required,
           Validators.pattern('/^(s+S+s*)*(?!s).*$/'),
        ],
      ],
      password: [
        '',
        Validators.required,
        Validators.pattern(
          "'(?:[^A-Z]*[A-Z])[^!@#$&*]*[!@#$&*](?:[^0-9]*[0-9]){4}'"
        ),
      ],
    });
  }
  callngform(){
console.log(this.userForm);
  }

  ngOnInit(): void {}
}
