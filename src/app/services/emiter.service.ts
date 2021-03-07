import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiterService {

  tab_ventas = new EventEmitter();

  constructor() { }

  emit_tab_ventas(value: boolean) {
    this.tab_ventas.emit(value);
  }
  
}
