import { Injectable } from '@angular/core';
import { User } from '../models/form-user-info';

@Injectable({
  providedIn: 'root'
})
export class FormUserDataService {

  userInfo : User[]

  addUser(info: User){
    this.userInfo = [];
    if(localStorage.getItem('Users') === null){
      this.userInfo.push(info);
      localStorage.setItem('Users', JSON.stringify(this.userInfo))
    }else{
      this.userInfo = JSON.parse(localStorage.getItem('Users'))
      this.userInfo.push(info)
      localStorage.setItem('Users', JSON.stringify(this.userInfo))
    }
  }


  getUser(){
    if(localStorage.getItem === null){
      return this.userInfo
    } else {
      this.userInfo = JSON.parse(localStorage.getItem('Users'))
      return this.userInfo
    }
  }

}
