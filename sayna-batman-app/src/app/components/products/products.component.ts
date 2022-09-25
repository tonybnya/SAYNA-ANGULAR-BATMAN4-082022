import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ApiArticlesService } from 'src/app/services/api-articles.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page: number = 1;
  public products: any;
  isAdded: boolean = false;

  constructor(private api: ApiArticlesService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.api.getArticles().subscribe((res) => { 
      this.products = res;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.prix });
      });
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('cart');
  }

}
