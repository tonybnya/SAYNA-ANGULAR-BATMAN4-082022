import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title!: string;
  price!: number;
  image!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'MUG';
    this.price = 12;
  }

}
