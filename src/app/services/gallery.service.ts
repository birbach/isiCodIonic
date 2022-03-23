import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

getListPhotos(photoName: any,pageSize: any,currentPage: any): Observable<any>{

  return this.http.get<any>('https://pixabay.com/api/?key=26247025-03c0a01342e50ebd8e65dcd4d&q='
  +photoName+'&image_type=photo&pretty=true&per_page='+pageSize+'&page='+currentPage);
}
}
