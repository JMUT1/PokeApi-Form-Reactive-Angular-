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


addUser(info: User){
  this.userInfo.push(info)
  let userInfo: User[] = []
  if(localStorage.getItem('Users') === null){
    userInfo.push(info);
    localStorage.setItem('Users', JSON.stringify(userInfo))
  }else{
    userInfo = JSON.parse(localStorage.getItem('Users'))
    userInfo.push(info)
    localStorage.setItem('Users', JSON.stringify(userInfo))
  }
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
