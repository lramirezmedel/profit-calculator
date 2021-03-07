import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmiterService } from 'src/app/services/emiter.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-tab-compra',
  templateUrl: './tab-compra.page.html',
  styleUrls: ['./tab-compra.page.scss', '../../app.component.scss'],
})
export class TabCompraPage implements OnInit {

  precio: any;
  cantidad: any;
  unidades: any;
  fee: any;
  total: any;
  fee_exchange: any;
  fGroup: FormGroup;


  constructor(
    private emiter: EmiterService,
    private local: LocalService) { 

      this.precio = new FormControl(0, Validators.required);
      this.cantidad = new FormControl(0, Validators.required);
      this.unidades = new FormControl(0, Validators.required);
      this.fee_exchange = new FormControl(0.0750, Validators.required);
      this.fee = new FormControl(0, Validators.required);
      this.total = new FormControl(0, Validators.required);
      

      this.fGroup = new FormGroup
      ({
        precio: this.precio,
        cantidad: this.cantidad,
        unidades: this.unidades,
        fee_exchange: this.fee_exchange,
        fee: this.fee,
        total: this.total
      });

  }

  ngOnInit() {
  }

  calcular(){

    if(this.fGroup.valid)
    {
      let cantidad = (this.fGroup.value.cantidad / this.fGroup.value.precio).toFixed(8);
      let fee = this.get_fee();
      let total = this.fGroup.value.cantidad + fee;
      
      this.fGroup.controls.unidades.setValue(cantidad);
      this.fGroup.controls.fee.setValue(fee);
      this.fGroup.controls.total.setValue(total);

      this.local.set_monedas(cantidad);
      this.local.set_inversion(total);
      this.emiter.emit_tab_ventas(false);
    }
    else
    {
      alert('invalid form....');
    }

  }

  get_fee(){
    let fee = (((this.fGroup.value.cantidad * this.fGroup.value.precio) * this.fGroup.value.fee_exchange) / 100) / this.fGroup.value.precio;
    return fee;
  }

  listener(){
    if(!this.fGroup.value.precio || !this.fGroup.value.cantidad){
      this.reset_form();
      this.emiter.emit_tab_ventas(true);
    }
  }

  reset_form(){
    this.fGroup.controls.unidades.setValue(0);
    this.fGroup.controls.fee.setValue(0);
    this.fGroup.controls.total.setValue(0);
  }

}
