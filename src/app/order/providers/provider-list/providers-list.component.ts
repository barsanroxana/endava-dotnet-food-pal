import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Provider } from '../../models/order-provider';
import { CatalogueItem } from '../../models/catalogue-item';
import { MatDialog } from '@angular/material/dialog';
import { ProviderCatalogueComponent } from '../provider-catalogue/provider-catalogue.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-providers',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {
  public providerList: Array<Provider>;
  public providerCatalogItemList: Array<CatalogueItem>

  constructor(private providersSvc: ProvidersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.providersSvc.getAllProviders().subscribe((data) => {
      this.providerList = data;
    })
  }

  feedMe(providerId: number) {
    this.providersSvc.getCatalogItemByProviderId(providerId).subscribe((catalogueItems) => {
      this.dialog.open(ProviderCatalogueComponent, {
        data: catalogueItems
      });
    })
  }
}
