import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

 pokemon: any = ""
 pokemonImg = '';
  pokemonType = [];


  constructor(private activatedRouter: ActivatedRoute,
    private pokeService: PokemonService) {
    this.activatedRouter.params.subscribe(
      params =>{
        this.getMoreData(params['id'])
      }
    )
  }

  ngOnInit(): void {

  }

  getMoreData(id: any){
    this.pokeService.getMoreData(id).subscribe(
      res =>{
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      }
    )}
}
