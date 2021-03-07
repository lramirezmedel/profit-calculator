import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCompraPage } from './tab-compra.page';

const routes: Routes = [
  {
    path: '',
    component: TabCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCompraPageRoutingModule {}
