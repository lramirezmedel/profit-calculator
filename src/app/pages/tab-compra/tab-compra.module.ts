import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabCompraPageRoutingModule } from './tab-compra-routing.module';
import { TabCompraPage } from './tab-compra.page';
import { Components } from 'src/app/components/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TabCompraPageRoutingModule,
    Components
  ],
  declarations: [TabCompraPage]
})
export class TabCompraPageModule {}
