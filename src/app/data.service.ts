import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://localhost:5001/api/Values/';
  constructor(private http: HttpClient) { }

  public getData(endpoint): Observable<any> {
    return this.http.get(this.baseUrl + endpoint);
  }
}
