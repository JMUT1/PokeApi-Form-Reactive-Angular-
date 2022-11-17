import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName:['', Validators.required],
    description:['', Validators.required],
    price: ['', Validators.required],
    Category: ['', Validators.required],
    urlImg: ['', Validators.required],
    phone: ['', Validators.required],
    lineCompany: ['', Validators.required]
  })

  ngOnInit(): void {}

  saveForm(){
    console.log(     this.profileForm.value);

  }

}
