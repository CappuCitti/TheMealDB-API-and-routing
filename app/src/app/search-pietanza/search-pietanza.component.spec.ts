import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPietanzaComponent } from './search-pietanza.component';

describe('SearchPietanzaComponent', () => {
  let component: SearchPietanzaComponent;
  let fixture: ComponentFixture<SearchPietanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPietanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPietanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
