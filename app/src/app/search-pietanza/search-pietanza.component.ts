import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/models/Meal.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-search-pietanza',
  templateUrl: './search-pietanza.component.html',
  styleUrls: ['./search-pietanza.component.scss'],
})
export class SearchPietanzaComponent implements OnInit {
  meals: Array<Meal> = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  search(e: any) {
    var q = e.target.value;

    this.api.search(q).subscribe((data) => {
      this.meals = data.meals;
      console.log(this.meals);
    });
  }
}
