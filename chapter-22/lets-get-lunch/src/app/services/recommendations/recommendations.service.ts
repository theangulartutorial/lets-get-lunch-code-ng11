import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const recommendations = require('./zomato-chicago-response.json');

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private http: HttpClient) { }

  get(eventId: string): Observable<any> {
    return of(recommendations);
  }  
}
