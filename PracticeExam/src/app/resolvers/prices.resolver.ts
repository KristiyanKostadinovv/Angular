import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PriceModel} from "../models/price.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PricesService} from "../services/prices.service";

@Injectable({providedIn:"root"})
export class PricesResolver implements Resolve<Observable<PriceModel>>{

  constructor(private readonly pricesService:PricesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PriceModel> {
    return this.pricesService.getData();
  }
}
