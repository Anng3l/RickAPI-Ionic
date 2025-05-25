import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DatosCompartidosService } from '../Services/datos-compartidos.service';
import { FirebaseService } from '../Services/firebase/firebase.service';

import { IonicModule } from "@ionic/angular";


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  standalone: true,
  imports: [
  IonicModule,
  CommonModule, FormsModule
]
})
export class DetallesPage implements OnInit {
  characterData:any;

  image=""
  idApi=0
  nombre=""
  status=""
  species=""
  genre=""
  originPlanet=""
  currentLocaton=""
  comentario=""

  constructor(private dataService:DatosCompartidosService, private datosEnvio:FirebaseService) { }

  ngOnInit() {
    this.characterData = this.dataService.getPersonajeCompartido();
    console.log("GetPersonajeCompartido: ", this.dataService.getPersonajeCompartido())
    console.log("Character data: ", this.characterData);
  }

  sendContent() {
    this.image=this.characterData.image
    this.idApi=this.characterData.id
    this.nombre=this.characterData.name
    this.status=this.characterData.status
    this.species=this.characterData.species
    this.genre=this.characterData.gender
    this.originPlanet=this.characterData.origin.name
    this.currentLocaton=this.characterData.location.name
    this.comentario

    this.datosEnvio.sendContent(this.image,this.idApi, this.nombre, this.status, this.species, this.genre, this.originPlanet, this.currentLocaton,this.comentario
    );
  }

}
