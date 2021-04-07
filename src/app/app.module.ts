import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Stopwatch1Component } from './stopwatch1/stopwatch1.component';
import { StopwatchUsingRxjsComponent } from './stopwatch-using-rxjs/stopwatch-using-rxjs.component';
import { FormatTimePipe } from './shared/pipe/format-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
  
    Stopwatch1Component,
  
    StopwatchUsingRxjsComponent,
  
    FormatTimePipe,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
