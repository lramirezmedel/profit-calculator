import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabVentaPageRoutingModule } from './tab-venta-routing.module';
import { TabVentaPage } from './tab-venta.page';
import { Components } from 'src/app/components/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TabVentaPageRoutingModule,
    Components
  ],
  declarations: [TabVentaPage]
})
export class TabVentaPageModule {}
