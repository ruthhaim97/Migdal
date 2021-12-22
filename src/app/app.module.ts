import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Sec1Component } from './sec1/sec1.component';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { Sec4Component, PhonePipe } from './sec4/sec4.component';

@NgModule({
  declarations: [
    AppComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    Sec4Component,
    PhonePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
