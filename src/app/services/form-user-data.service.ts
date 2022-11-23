import { Injectable } from '@angular/core';
import { User } from '../models/form-user-info';

@Injectable({
  providedIn: 'root'
})
export class FormUserDataService {



userInfo : User[]

 constructor() {
    this.userInfo = []
  }

  addUser(userInfo: User){
    this.userInfo.push(userInfo)
    let users = []
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [...users,userInfo];
      users.push(userInfo)

    } else{
      users = [userInfo]
    }
    localStorage.setItem('Users', JSON.stringify(users))
  }

  getUser(){
    if(localStorage.getItem === null){
      return this.userInfo
    } else{
      this.userInfo = JSON.parse(localStorage.getItem('Users'))
      return this.userInfo
    }
  }

}
