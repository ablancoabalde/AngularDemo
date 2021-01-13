import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  products: Array<any>;
  constructor(private dataSvc: DataService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.dataSvc.getAllProducts();
  }
}
