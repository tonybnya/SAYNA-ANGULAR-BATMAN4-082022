import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCommentsService {
  url: string = 'http://localhost:3000/comments/';

  constructor(private http: HttpClient) { }
  getComments() {
    return this.http.get<any>(this.url).pipe(map((res) => {
      return res;
    }));
  }
}
