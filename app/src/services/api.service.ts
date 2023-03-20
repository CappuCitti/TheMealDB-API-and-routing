import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meals } from 'src/models/Meal.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  search(q: string): Observable<Meals> {
    return this.http.get<Meals>(`${this.baseUrl}/search.php`, { params: { s: q } });
  }

  getByID(q: string): Observable<Meals> {
    return this.http.get<Meals>(`${this.baseUrl}/lookup.php`, { params: { i: q } });
  }
}
