import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly APIUrl = environment.APIUrl;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  EMAIL: 'email';

  constructor(private http: HttpClient) { }


  getEmailAPi(email: Email): Observable<any>{
    return this.http.post<any>(this.APIUrl + this.EMAIL, email);

  }
}
