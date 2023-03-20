import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-search-pietanza',
  templateUrl: './search-pietanza.component.html',
  styleUrls: ['./search-pietanza.component.scss'],
})
export class SearchPietanzaComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.search('lasagna').subscribe((data) => console.log(data));
  }
}
