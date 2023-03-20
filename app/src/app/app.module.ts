import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPietanzaComponent } from './search-pietanza/search-pietanza.component';
import { ItemPietanzaComponent } from './item-pietanza/item-pietanza.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPietanzaComponent,
    ItemPietanzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
