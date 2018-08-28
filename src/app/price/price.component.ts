import { Component, OnInit } from '@angular/core';
import { WinepriceService } from '../wineprice.service';
import { ChartService } from '../chart.service';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  prices: any;
 
  chart = [];
  constructor(private _wineprice: WinepriceService,private _chart:ChartService) { }

  ngOnInit() {
	this._wineprice.getWinePrices()
      .subscribe(res => {
			this.prices = res;
			this.chart=this._chart.getChart()
        })  
  }

}

