import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient) { }

 getMeteoData(city: string): Observable<any>{
  return this.httpClient.get<any>('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=c778604be7164d1bb8562998d17d3496');
 }
}
