import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { mainReducer } from "./state-management/reducers/main-reducer";
import { StoreModule } from "@ngrx/store";

import { SafeHtmlPipe } from "./pipes/SafeHtmlPipe";

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({mainReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
