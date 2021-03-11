import { Component, OnInit } from "@angular/core";

import { Input } from "@angular/core";

// To notify the parent via listener
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  // The Input decorator indicates that the property's value is passed from the component's parent
  @Input() product;

  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
