import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';


import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

interface Sprite {
  front_default: ''
}

interface allPokemonData {
  id: number,
  name: string,
  sprites: Sprite
}
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
  localStoragePokemons = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    // this.getPokemonsNew();
    if(this.localStoragePokemons === null) {
      this.pokeService.getPokemonsNew()
      .subscribe((response: any)=>{
        response.results.forEach(result =>{
          this.pokeService.getMoreData(result.name)
          .subscribe((uniqResponse4:allPokemonData)=>{
            const payload = {
              id: uniqResponse4.id,
              name: uniqResponse4.name,
              sprite: uniqResponse4.sprites.front_default,
            }
            this.newPokemons.push(payload);
            localStorage.setItem('Pokemons', JSON.stringify(this.newPokemons));
            this.datasource = new MatTableDataSource<any>(this.newPokemons);
            this.datasource.paginator = this.paginator;
          })
        })
      })
    } else {
      // this.datasource = new MatTableDataSource<any>(this.localStoragePokemons)
      // this.datasource.paginator = this.paginator
    }

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
