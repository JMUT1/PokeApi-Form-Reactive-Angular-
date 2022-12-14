import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import {CreatePageComponent} from './components/create-page/create-page.component'
import {ListComponentComponent} from './components/list-component/list-component.component'


const routes: Routes = [
  {path: 'home', component: PokeTableComponent },
  {path: 'detail', component: PokeDetailComponent},
    {path: 'createProduct', component: CreatePageComponent},
  {path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: 'productList', component: ListComponentComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
