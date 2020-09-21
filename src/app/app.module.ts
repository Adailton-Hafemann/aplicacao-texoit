import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './commom/shared.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListComponent } from './component/list/list.component';

import { YearWinnerComponent } from './commom/component/yearWinner/year-winner.component';
import { YearWithMultipleWinnerComponent } from './commom/component/yearWithMultipleWinner/year-with-multiple-winner.component';
import { StudiosWinnerComponent } from './commom/component/studioWinner/studio-winner.component';
import { ProducerWinnerComponent } from './commom/component/prodicerWinner/producer-winner.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    YearWinnerComponent,
    ProducerWinnerComponent,
    StudiosWinnerComponent,
    YearWithMultipleWinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
