import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { ProvidersListComponent } from './providers/provider-list/providers-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProvidersService } from './services/providers.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ProviderCatalogueComponent } from './providers/provider-catalogue/provider-catalogue.component';

const materialImports = [MatButtonModule, MatTableModule, MatSortModule, MatGridListModule, MatDialogModule];

@NgModule({
  declarations: [OrderComponent, ProvidersListComponent, ProviderCatalogueComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OrderRoutingModule,
    ...materialImports,
  ],
  providers: [ProvidersService],
})
export class OrderModule { }
