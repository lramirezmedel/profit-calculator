import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadorPage } from './calculador.page';

const routes: Routes = [
  {
    path: 'calculador',
    component: CalculadorPage,
    children: 
    [{
      path: 'tab-compra',
      loadChildren: () => import('../tab-compra/tab-compra.module').then( m => m.TabCompraPageModule)
    },{
      path: 'tab-venta',
      loadChildren: () => import('../tab-venta/tab-venta.module').then( m => m.TabVentaPageModule)
    }]
  },{
    path: '',
    redirectTo: 'calculador/tab-compra'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadorPageRoutingModule {}
