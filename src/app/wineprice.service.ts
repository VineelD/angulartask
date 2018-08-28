import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WinepriceService {

  constructor(private _http: HttpClient) { }
  
  getWinePrices(){
	  return this._http.get('/price').pipe(map(data => {
			let arr= data as Array<any>;
			return arr.sort(function(obj1,obj2){
			return obj1._id - obj2._id;
			})
			
  }));
}
}
