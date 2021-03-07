import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProvidersListComponent } from './providers/provider-list/providers-list.component';
const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      { path: '', component: ProvidersListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
