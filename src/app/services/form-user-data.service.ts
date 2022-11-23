import { Injectable } from '@angular/core';
import { User } from '../models/form-user-info';

@Injectable({
  providedIn: 'root'
})
export class FormUserDataService {

  constructor() { }

    addUser(userInfo: User){
    let users = []
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [...users,userInfo];
    } else{
      users = [userInfo]
    }
    localStorage.setItem('Users', JSON.stringify(users))

  }
}
