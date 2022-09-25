import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = +this.cartService.getTotalPrice();
    });
  }

  removeItem(product: any) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?'))
      this.cartService.removeCartItem(product);
  };
  // removeItem(productId: any) {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?'))
  //     this.cartService.removeCartItem(productId).subscribe(() => {
  //       alert('Suppression confirmée !');
  //       window.location.reload();
  //     });
  // }
}