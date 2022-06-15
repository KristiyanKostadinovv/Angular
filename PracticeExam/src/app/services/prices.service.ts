import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PriceModel} from "../models/price.model";

const URL: string = "https://exam-6734d-default-rtdb.europe-west1.firebasedatabase.app/prices.json";

@Injectable({providedIn: "root"})
export class PricesService {
  constructor(private http: HttpClient) {
  }

  getPrices() {
    return this.http.get<PriceModel>(URL);
  }
}
