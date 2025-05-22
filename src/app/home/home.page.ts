
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput } from '@ionic/angular/standalone';

import { IonicModule } from "@ionic/angular"
import { HttpClient } from '@angular/common/http';
import { every, Subscription } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { DatosCompartidosService } from '../Services/datos-compartidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home', 
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})

export class HomePage implements OnInit {
  characters: any[] = [];
  offset = 0;
  buttonLimit = 1;
  topLimit = 20;

  limit = 1;
  loading = false;

  characterName:string = "";
  characterData:any=null;


  constructor(private http: HttpClient, private dataService: DatosCompartidosService, private router:Router) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(event?: any) {
    if (this.loading) return;
    this.loading = true;

    this.http
      .get<any>(`https://rickandmortyapi.com/api/character/?page=${this.limit}`)
      .subscribe((res) => {
        console.log("Resultados: ", res)
        this.characters = [...this.characters, ...res.results];
        this.limit++;
        console.log(`https://rickandmortyapi.com/api/character/?page=${this.limit}`)
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
    return `https://rickandmortyapi.com/api/character/avatar/${index + 1}.jpeg`;
  }

  datosCompartidos(datos:any) {
    this.dataService.setDatos(datos)
  }

  getCharacterData(name:string) {
    this.characterName = "";
    this.characterData = null;
    console.log(name)

    
    this.http
      .get<any>(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .subscribe((res) => {
        this.characterData = res;
        console.log(this.characterData)
        this.datosCompartidos(this.characterData);
      });
  }

  navigateToPage(detalles:string):void {
    this.router.navigate([detalles])
  }
}