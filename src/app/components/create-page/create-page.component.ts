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
    lastName:['', Validators.required],
    address: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required]
  })

  ngOnInit(): void {}

  saveForm(){
    console.log(     this.profileForm.value
);

  }

}
