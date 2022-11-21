import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

form: FormGroup


  constructor(private formBuilder : FormBuilder) {
    this.buildForm()
  }

  ngOnInit(): void {}

  private buildForm(){
this.form = this.formBuilder.group({
  name: ['',  [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z0-9_-]*$/)]],
  description: ['',  [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z0-9_-]*$/)]],
  category: ['', [Validators.required]],
  price: ['', [Validators.required, Validators.pattern(/^[0-9]*\.[0-9][0-9]$/)]],
  imageUrl: ['', [Validators.required, Validators.pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)]],
  phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
  select: ['', Validators.required],
});

// this.form.valueChanges
// .pipe(debounceTime(500))
// .subscribe(value => console.log(value)
// )

}


save(event: Event){
  event.preventDefault();
  if(this.form.valid){
    const value = this.form.value
    console.log(value);
  }}

  get nameField(){
    return this.form.get('name');
  }

  get descriptionField(){
    return this.form.get('description')
  }
  get priceField(){
    return this.form.get('price')
  }
    get categoryField(){
    return this.form.get('category')
  }

  get urlField(){
    return this.form.get('imageUrl')
  }

  get phoneField(){
    return this.form.get('phone')
  }

  get selectField(){
    return this.form.get('select')
  }


}
