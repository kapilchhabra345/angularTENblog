import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  constructor(public http:HttpClient) { }
  getData()
  {
    let url="https://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }
}
