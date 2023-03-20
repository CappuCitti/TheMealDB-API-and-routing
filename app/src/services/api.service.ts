import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  search(q: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php`, { params: { s: q } });
  }
}
