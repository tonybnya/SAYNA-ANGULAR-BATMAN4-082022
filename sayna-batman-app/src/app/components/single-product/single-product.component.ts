import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiArticlesService } from 'src/app/services/api-articles.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product!: any;

  constructor(private api: ApiArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productID = +this.route.snapshot.params['id'];

    this.api.getArticleID(productID).subscribe((res) => { 
      this.product = res;
    });
  }

}
