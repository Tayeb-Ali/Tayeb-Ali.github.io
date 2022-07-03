import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // @ts-ignore
  contactForm: FormGroup;
  token: string | undefined;
  account_validation_messages = {
    'name': [
      {type: 'required', message: 'Name is required'},
      {type: 'minlength', message: 'Name must be at least 10 characters long'},
      {type: 'maxlength', message: 'Name cannot be more than 500 characters long'},
    ],
    'email': [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern', message: 'Enter a valid email'}
    ],
    'subject': [
      {type: 'required', message: 'Confirm subject is required'},
      {type: 'minlength', message: 'subject must be at least 10 characters long'},
      {type: 'maxlength', message: 'subject cannot be more than 90 characters long'}
    ],
    'message': [
      {type: 'required', message: 'message is required'},
      {type: 'minlength', message: 'message must be at least 10 characters long'},
      {type: 'maxlength', message: 'message cannot be more than 90 characters long'}
    ]
  }

  constructor(private fb: FormBuilder) {
    this.myForm();
    this.token = undefined;
  }

  ngOnInit(): void {

  }

  myForm() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(120), Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(120), Validators.minLength(10), Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(120), Validators.minLength(10)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(1000), Validators.minLength(90)]),
      recaptcha: new FormControl('', Validators.required),
    });
  }


  onSubmit() {
    // this.myForm();
    console.log(this.contactForm?.value);
    console.log("error: ", this.contactForm?.invalid);
    // @ts-ignore
    console.log("error: ", this.contactForm.controls['email'].errors['minlength']);

    // this.contactForm.controls.name.c
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }
}
