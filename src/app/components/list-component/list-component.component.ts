import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreatePageComponent} from "../create-page/create-page.component"
import {FormUserDataService} from '../../services/form-user-data.service';
import { User } from '../../models/form-user-info';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'category', 'phone', 'imageUrl', 'select'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

data: User[]


  constructor(private dialog: MatDialog, private userService : FormUserDataService ) { }

  ngOnInit(): void {
   this.data =  this.userService.getUser()
   this.dataSource = new MatTableDataSource(this.data)


  }

    openDialog() {
    const dialogRef = this.dialog.open(CreatePageComponent);

    dialogRef.afterClosed().subscribe(result => {

    });


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }}
