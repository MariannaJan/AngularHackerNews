import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HackernewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
     this.baseUrl = 'https://node-hnapi.herokuapp.com';
   }

   fetchStories(storyType: string, page: number) {
     return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`);
   }

   fetchItems(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/item/${id}.json`);
   }

   fetchComments(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/item/${id}`);
   }
}
