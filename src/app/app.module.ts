import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { DistanceComponent } from './distance/distance.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InputsComponent,
    DistanceComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
