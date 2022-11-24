import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];

  pokemonEvolve: any = ""

  constructor(private activatedRouter: ActivatedRoute,
    private pokemonService: PokemonService) {

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id: any) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        // console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      err => {
        console.log(err);
      }
    )
  }

  getPokemonEvol(id: any){
    this.pokemonService.getPokemonsEvolutionChain(id).subscribe((res:any)=>{
      console.log(res);
      this.pokemonEvolve = res


    })
  }


  getAbilities(): string {
    return this.pokemon.abilities.map((x: { ability: { name: any; }; }) => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }
}


