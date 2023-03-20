import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPietanzaComponent } from './item-pietanza/item-pietanza.component';
import { SearchPietanzaComponent } from './search-pietanza/search-pietanza.component';

const routes: Routes = [
  { path: '', component: SearchPietanzaComponent },
  { path: ':id', component: ItemPietanzaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
