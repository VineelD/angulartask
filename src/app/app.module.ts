import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { NvD3Module } from 'ngx-nvd3';
import { WinepriceService } from './wineprice.service';
import { ChartService } from './chart.service';


const appRoutes: Routes = [
  {
    path: 'prices',
    component: PriceComponent,
    data: { title: 'Price List' }
  },
  { path: '',
    redirectTo: '/prices',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
  HttpClientModule,
  NvD3Module,
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } 
  )
  ],
  providers: [WinepriceService,ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
