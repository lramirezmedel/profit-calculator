import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  monedas: any;
  inversion: any;

  constructor() { }

  set_monedas(item){
    this.monedas = item;
  }

  get_monedas(){
    return this.monedas;
  }

  set_inversion(item){
    this.inversion = item;
  }

  get_inversion(){
    return this.inversion;
  }
  
}
