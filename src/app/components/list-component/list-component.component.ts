import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreatePageComponent} from "../create-page/create-page.component"

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

    openDialog() {
    const dialogRef = this.dialog.open(CreatePageComponent);

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
