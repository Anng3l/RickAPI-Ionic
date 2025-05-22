
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput } from '@ionic/angular/standalone';

import { IonicModule } from "@ionic/angular"
import { HttpClient } from '@angular/common/http';
import { every } from 'rxjs';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home', 
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})

export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;
  loading = false;

  pokemonName:string = "";
  pokemonData:any=null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(event?: any) {
    if (this.loading) return;
    this.loading = true;

    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
      .subscribe((res) => {
        this.pokemons = [...this.pokemons, ...res.results];
        this.offset += this.limit;
        this.loading = false;

        if (event) {
          event.target.complete();
        }

        // Desactiva scroll si ya no hay más Pokémon
        if (res.next === null && event) {
          event.target.disabled = true;
        }
      });
  }

  getImageUrl(index: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
  }


  getPokemonData(name:string) {
    this.pokemonName = "";
    this.pokemonData = null;


    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .subscribe((res) => {
        this.pokemonData = res;
      });
  }
}