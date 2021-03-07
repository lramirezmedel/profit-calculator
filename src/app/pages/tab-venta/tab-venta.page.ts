import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-tab-venta',
  templateUrl: './tab-venta.page.html',
  styleUrls: ['./tab-venta.page.scss', '../../app.component.scss'],
})
export class TabVentaPage implements OnInit {

  unidades: any;
  inversion: any;
  precio: any;
  porcentaje: any;
  venta: any;
  fee_exchange: any;
  fee: any;
  total: any;
  fGroup: FormGroup;
  monedas: any;
  monto: any;

  constructor(
    private navCtrl: NavController,
    private local: LocalService) { 

      if(!this.local.get_monedas() || !this.local.get_inversion()){
        this.directo_compras();
      }

      this.monedas = Number(this.local.get_monedas());
      this.monto = Number(this.local.get_inversion());

      this.unidades = new FormControl(this.monedas, Validators.required);
      this.inversion = new FormControl(this.monto, Validators.required);
      this.precio = new FormControl(0, Validators.required);
      this.porcentaje = new FormControl(5, Validators.required);
      this.venta = new FormControl(0, Validators.required);
      this.fee_exchange = new FormControl(0.0750, Validators.required);
      this.fee = new FormControl(0, Validators.required);
      this.total = new FormControl(0, Validators.required);


      this.fGroup = new FormGroup
      ({
        unidades: this.unidades,
        inversion: this.inversion,
        precio: this.precio,
        porcentaje: this.porcentaje,
        venta: this.venta,
        fee_exchange: this.fee_exchange,
        fee: this.fee,
        total: this.total
      });

  }

  ngOnInit() {
  }

  directo_compras(){
    this.navCtrl.navigateRoot('/calculador/calculador/tab-compra', { animated: true, animationDirection: 'back' });
  }

  calcular_porcentaje(){

    if(this.fGroup.valid)
    {
      if(this.fGroup.value.porcentaje > 0){

        let a = (this.fGroup.value.inversion * this.fGroup.value.porcentaje / 100) + this.fGroup.value.inversion;
        let b = (a * this.fGroup.value.fee_exchange) / 100;
        let c = a + b;
        let d = (c / this.fGroup.value.unidades).toFixed(4);
  
        this.fGroup.controls.venta.setValue(a);
        this.fGroup.controls.fee.setValue(b);
        this.fGroup.controls.total.setValue(c);
        this.fGroup.controls.precio.setValue(d);
  
      }
      else{
        this.reset_form();
      }
    }
    else
    {
      alert('invalid form....');
    }

  }

  reset_form(){
    this.fGroup.controls.venta.setValue(0);
    this.fGroup.controls.fee.setValue(0);
    this.fGroup.controls.total.setValue(0);
    this.fGroup.controls.precio.setValue(0);
  }

}
