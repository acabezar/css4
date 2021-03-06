import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BudgetIconComponent } from './components/budget-icon/budget-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ListComponent,
    CardComponent,
    GalleryComponent,
    BudgetIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
