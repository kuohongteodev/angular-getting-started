import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

import { Observable } from "rxjs";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCost?: Observable<Array<{ type: string; price: number }>>;

  ngOnInit(): void {
    this.shippingCost = this.cartService.getShippingPrices();
  }
}
