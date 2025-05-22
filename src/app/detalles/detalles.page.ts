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
  IonContent, IonHeader, IonTitle, IonToolbar,
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
    this.characterData = this.dataService.getData();
  }

  sendContent() {
    this.image=this.characterData.results[0].image
    this.idApi=this.characterData.results[0].id
    this.nombre=this.characterData.results[0].name
    this.status=this.characterData.results[0].status
    this.species=this.characterData.results[0].species
    this.genre=this.characterData.results[0].gender
    this.originPlanet=this.characterData.results[0].origin.name
    this.currentLocaton=this.characterData.results[0].location.name
    this.comentario


    console.log("Sepcies: ", this.characterData.results[0].species)


    this.datosEnvio.sendContent(this.image,this.idApi, this.nombre, this.status, this.species, this.genre, this.originPlanet, this.currentLocaton,this.comentario
    );
  }

}
