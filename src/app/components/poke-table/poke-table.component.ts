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

  displayColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  datasource = new MatTableDataSource<any>(this.data);
  pokemons =  [];

  newPokemons: any[] = []

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
    this.pokeService.getPokemonsNew()
    .subscribe((response: any)=>{
      response.results.forEach(result =>{
        this.pokeService.getMoreData(result.name)
        .subscribe((uniqResponse4:any)=>{
          this.newPokemons.push(uniqResponse4)
          console.log(this.newPokemons);


        })
      })
    })
  }

  getPokemons(){
    let pokemonData;

    for(let i = 1; i<= 350; i++){
      this.pokeService.getPokemons(i).subscribe(

        res =>{
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
          this.data.push(pokemonData);
          this.datasource = new MatTableDataSource<any>(this.data)
          this.datasource.paginator  = this.paginator
        },
        err =>{
          console.log(err);

        }
      )
    }
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
getRow(row){
  this.router.navigateByUrl(`pokeDetail/${row.position}`)
}



}
