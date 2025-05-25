import { Injectable } from '@angular/core';

import { Firestore, collection, addDoc } from "@angular/fire/firestore"; 


//Datos
export interface CharacterData {
  image:string,
  idApi:number;
  nombre:string;
  status:string;
  species:string;
  genre:string;
  originPlanet:string;
  currentLocaton:string;
  comentario:string;
}



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore:Firestore) {

  }

  sendContent(
  image:string,
  idApi:number,
  nombre:string,
  status:string,
  species:string,
  genre:string,
  originPlanet:string,
  currentLocaton:string,
  comentario:string)
  {
    const messagesRef=collection(this.firestore, "Actividad en clase Angel Maldonado")
    const characterData:CharacterData={
      image,
      idApi,
      nombre,
      status,
      species,
      genre,
      originPlanet,
      currentLocaton,
      comentario
    }
    
    return addDoc(messagesRef, characterData)
  }
}
