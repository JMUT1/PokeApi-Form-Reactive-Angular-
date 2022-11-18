import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  numRegex = /^-?\d*[.,]?\d{0,2}$/;
NumericRegex = "^[0-9]*$"




  constructor(private formBuilder: FormBuilder) { }





  profileForm :  FormGroup
  ngOnInit(): void {

this.profileForm = this.formBuilder.group({
    firstName:['',Validators.compose([Validators.required,Validators.minLength(3),])],
    description:['',Validators.compose([Validators.required,Validators.minLength(3)])],
    price: ['',Validators.compose([Validators.required,Validators.minLength(3), Validators.pattern(this.numRegex)])],
    Category: ['', Validators.required],
    // url: ['', Validators.required, Validators.pattern()],
    phone: ['',Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.numRegex)])],
    lineCompany: ['', Validators.required],
    agree: [false, [ Validators.requiredTrue]]
  })

  this.profileForm.valueChanges.subscribe(console.log);

  }

  saveForm(){

  }

}
