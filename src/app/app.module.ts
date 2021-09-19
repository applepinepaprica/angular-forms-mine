import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodDeliveryFormComponent } from './food-delivery-form/food-delivery-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDeliveryFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
