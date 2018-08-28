import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import { WinepriceService } from './wineprice.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  chart:any;
  colors=["#FF5733","#85929E","#F4D03F","#2E86C1","#196F3D","#922B21"]
  constructor(private _wineprice: WinepriceService) {
			 this._wineprice.getWinePrices()
				  .subscribe(res => {
			 
			 var jsonData={labels:{},datasets:[]};
			 jsonData.labels=res.map(s=>s.label);
			 jsonData.datasets=new Array<any>();
			 for(let index = 0;index < res[0].WinePrice.length;index ++){
				 jsonData.datasets.push({ 
								data: res.map(s=>s.WinePrice[index].$numberDecimal),
								borderColor: this.colors[index],
								fill: false,
								lineTension: 0,
								label: "201"+index
							  });
			 }
			  this.chart = new Chart('canvas', {
			  type: 'line',
			  data: jsonData,
			  options: {
				  title: {
				display: true,
				text: 'Wine Prices By Types By Vintages'
			},
				legend: {
				  display: true
				},
				scales: {
				  xAxes: [{
					display: true,
					offset: true
			   
				  }],
				  yAxes: [{
					display: true
				  }],
				}
			  }
			});
			})  
  }
  
 
    getChart(){
		return this.chart;
	}
}
