import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiArticlesService } from 'src/app/services/api-articles.service';
import { ApiCommentsService } from 'src/app/services/api-comments.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product!: any;
  page: number = 1;
  public comments: any;

  constructor(private api: ApiArticlesService, private route: ActivatedRoute, private apiCom: ApiCommentsService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    const productID = +this.route.snapshot.params['id'];

    this.api.getArticleID(productID).subscribe((res) => {
      this.product = res;
    });

    this.apiCom.getComments().subscribe((result: any) => {
      this.comments = result;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('cart');
  }
}
