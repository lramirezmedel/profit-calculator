import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabVentaPage } from './tab-venta.page';

const routes: Routes = [
  {
    path: '',
    component: TabVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabVentaPageRoutingModule {}
