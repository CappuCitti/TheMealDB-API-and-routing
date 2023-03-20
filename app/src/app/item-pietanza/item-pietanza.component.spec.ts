import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPietanzaComponent } from './item-pietanza.component';

describe('ItemPietanzaComponent', () => {
  let component: ItemPietanzaComponent;
  let fixture: ComponentFixture<ItemPietanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPietanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPietanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
