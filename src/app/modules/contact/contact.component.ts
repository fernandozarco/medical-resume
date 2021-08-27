import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone_number: ['', Validators.required],
    subject: '',
    body: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.form);
  }

}
