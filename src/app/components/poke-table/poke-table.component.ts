import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';


import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  newPokemons: any[] = []
  displayColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  datasource = new MatTableDataSource<any>(this.newPokemons);
  pokemons =  [];




  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    // this.getPokemonsNew();
    this.pokeService.getPokemonsNew()
    .subscribe((response: any)=>{
      response.results.forEach(result =>{
        this.pokeService.getMoreData(result.name)
        .subscribe((uniqResponse4:any)=>{
          this.newPokemons.push(uniqResponse4)
          console.log(this.newPokemons);
          this.datasource = new MatTableDataSource<any>(this.newPokemons)
          this.datasource.paginator = this.paginator
        })
      })
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
  getRow(row: any){
    this.router.navigateByUrl(`pokeDetail/${row.id}`)

  }

}
