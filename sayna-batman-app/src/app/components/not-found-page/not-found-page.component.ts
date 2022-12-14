import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onHome(): void {
    this.router.navigateByUrl('home');
  }

  onEshop(): void {
    this.router.navigateByUrl('eshop');
  }

}
