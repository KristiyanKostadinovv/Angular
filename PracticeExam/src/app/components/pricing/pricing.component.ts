import {Component, OnInit} from '@angular/core';
import {PriceModel} from "../../models/price-model";
import {PricesService} from "../../services/prices.service";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  public price: PriceModel | null = null;

  constructor(private pricesService: PricesService) {
  }

  private displayPrices() {
    this.pricesService.getDataForTable().subscribe(data => {
      this.price = data;
    });
  }

  ngOnInit(): void {
    this.displayPrices();
  }
}


