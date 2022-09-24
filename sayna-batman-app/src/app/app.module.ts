import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { BarsComponent } from './components/bars/bars.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    EshopComponent,
    MonCompteComponent,
    ScrollbarComponent,
    BarsComponent,
    NotFoundPageComponent,
    CartComponent,
    FilterComponent,
    ProductsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
