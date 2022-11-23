import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreatePageComponent} from "../create-page/create-page.component"
import {FormUserDataService} from '../../services/form-user-data.service';
import { User } from '../../models/form-user-info';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

data: User[]

  constructor(private dialog: MatDialog, private userService : FormUserDataService ) { }

  ngOnInit(): void {
   this.data =  this.userService.getUser();

  }

    openDialog() {
    const dialogRef = this.dialog.open(CreatePageComponent);

    dialogRef.afterClosed().subscribe(result => {

    });


  }







}
