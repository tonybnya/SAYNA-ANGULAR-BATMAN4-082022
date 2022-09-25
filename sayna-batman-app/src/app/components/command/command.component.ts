import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  public grandTotal!: number;
  public productsCommand: any;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((item)=>{
      this.productsCommand = item;
      this.calculTotal();

    })
  }

  calculTotal(): void{
    this.grandTotal =0;
    this.productsCommand.forEach((item:any)=>{
      this.grandTotal += item.quantity * item.Prix;
    })
  }


}