import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';

const recommendations = require('./zomato-chicago-response.json');

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  API = environment.api;

  constructor(private http: HttpClient) { }

  get(eventId: string): Observable<any> {
    return of(recommendations);
  }  
}
