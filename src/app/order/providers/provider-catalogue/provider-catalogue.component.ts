import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CatalogueItem } from '../../models/catalogue-item';

@Component({
  selector: 'app-provider-catalogue',
  templateUrl: './provider-catalogue.component.html',
  styleUrls: ['./provider-catalogue.component.scss']
})
export class ProviderCatalogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public catalogueItems: CatalogueItem[]) {}

  ngOnInit(): void {
  }

}
