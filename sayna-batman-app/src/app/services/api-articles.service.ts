import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiArticlesService {
  url: string = 'http://localhost:3000/products/';
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<any>(this.url).pipe(map((res: any) => { 
      return res;
    }));
  }

  getArticleID(id: number) {
    return this.http.get<any>(this.url + id).pipe(map((res: any) => { 
      return res;
    }));
  }
}
