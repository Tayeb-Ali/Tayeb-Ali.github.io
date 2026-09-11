import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha-2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RecaptchaV3Module],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  token: string | undefined;
  sending = false;
  account_validation_messages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be at least 10 characters long' },
      { type: 'maxlength', message: 'Name cannot be more than 500 characters long' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' },
    ],
    subject: [
      { type: 'required', message: 'Confirm subject is required' },
      { type: 'minlength', message: 'subject must be at least 10 characters long' },
      { type: 'maxlength', message: 'subject cannot be more than 90 characters long' },
    ],
    message: [
      { type: 'required', message: 'message is required' },
      { type: 'minlength', message: 'message must be at least 10 characters long' },
      { type: 'maxlength', message: 'message cannot be more than 90 characters long' },
    ],
  };

  private fb = inject(FormBuilder);
  private recaptchaV3 = inject(ReCaptchaV3Service);

  constructor() {
    this.contactForm = this.myForm();
    this.token = undefined;
  }

  ngOnInit(): void {}

  myForm(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(120),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(120),
        Validators.minLength(10),
        Validators.email,
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.maxLength(120),
        Validators.minLength(10),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.sending = true;
    this.recaptchaV3.execute('contact').subscribe({
      next: (token) => {
        this.token = token;
        console.log({ ...this.contactForm.value, recaptchaToken: token });
        // TODO: POST to backend with token for server-side verification.
        this.sending = false;
      },
      error: () => {
        this.sending = false;
      },
    });
  }
}
