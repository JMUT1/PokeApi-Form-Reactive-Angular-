import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}


home(){
  this.router.navigateByUrl('/home')
}

detail(){
  this.router.navigateByUrl("/detail")
}

createProduct(){
  this.router.navigateByUrl('/createProduct')
}

productList(){
  this.router.navigateByUrl('/productList')
}

}
