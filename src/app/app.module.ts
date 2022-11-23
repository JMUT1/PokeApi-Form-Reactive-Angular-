import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponentComponent } from './components/list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PokeDetailComponent,
    PokeTableComponent,
    ProgressBarComponent,
    CreatePageComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
