import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { HeightComponent } from './card-form/height/height.component';
import { WeightComponent } from './card-form/weight/weight.component';
import { ConvertPipe } from './card-form/weight/convert.pipe';

@NgModule({
  declarations: [AppComponent, CardFormComponent, HeightComponent, WeightComponent, ConvertPipe],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
