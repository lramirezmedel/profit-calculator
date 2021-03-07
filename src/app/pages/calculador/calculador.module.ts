import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadorPageRoutingModule } from './calculador-routing.module';

import { CalculadorPage } from './calculador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadorPageRoutingModule
  ],
  declarations: [CalculadorPage]
})
export class CalculadorPageModule {}
