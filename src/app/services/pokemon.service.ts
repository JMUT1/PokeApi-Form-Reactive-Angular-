import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;
  evolutionUrl = environment.evolutionUrl;

  constructor(private http: HttpClient) {}

  getPokemons(index){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`)
  }

  getPokemonsNew(){
    return this.http.get(`${this.baseUrl}/pokemon?limit=100`)
  }

  getMoreData(name: string){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`)
  }

    getEvolution(name: string){
    return this.http.get<any>(`${this.evolutionUrl}/${name}`)
  }

}
