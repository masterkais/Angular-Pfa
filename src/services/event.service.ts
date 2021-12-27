import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { event } from 'src/models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private Http:HttpClient) { }


  getpopular(){

    return this.Http.get<event[]>('http://127.0.0.1:3000/Popular/1');
  
  }
}
