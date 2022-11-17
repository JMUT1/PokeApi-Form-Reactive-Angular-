import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import {PokemonDetail} from "src/app/models/poke-detail-model";

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {
  pokemonIndex: PokemonDetail
  pokemon: any = '';
  pokemonType = [];
  pokemonImg = ''

  searchPokemon: PokemonDetail = new PokemonDetail();


  constructor(private pokemonService: PokemonService, private activatedRouter : ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params =>{this.getPokemon(params['id']);
      }) }





   ngOnInit(): void {}

   getPokemon(id){
     this.pokemonService.getPokemons(id).subscribe(
       res =>{
         console.log(res);

         this.pokemon = res;
         this.pokemonImg = this.pokemon.sprites.front_default;
         this.pokemonType =  res.types[0].type.name
        },
        err => {console.log(err);
        }
        )
      }

      getAbilities(): string {
        return this.pokemon.abilities.map(x => x.ability.name).join(', ');
      }

        getPrincipalType(list: any[]) {
        return list.filter(x => x.slot === 1)[0]?.type.name;
      }
    }
