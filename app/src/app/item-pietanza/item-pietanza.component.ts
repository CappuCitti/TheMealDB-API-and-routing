import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Meal } from 'src/models/Meal.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-item-pietanza',
  templateUrl: './item-pietanza.component.html',
  styleUrls: ['./item-pietanza.component.scss'],
})
export class ItemPietanzaComponent implements OnInit {
  id: undefined | string = '';
  meal!: Meal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')?.toString();

      if (!this.id) this.router.navigate(['/']);
      else {
        this.api
          .getByID(this.id)
          .subscribe((data) => (this.meal = data.meals[0]));
      }
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}
