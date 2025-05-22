import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DatosCompartidosService {

  private datosCompartidos: any;
  
  setDatos(data: any)
  {
    this.datosCompartidos = data;
  }
  getData() {
    return this.datosCompartidos;
  }

  constructor() { }
  
}
