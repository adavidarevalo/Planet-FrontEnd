import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Menu } from './../models/menu.model'

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  information = []
  constructor(
    private http: HttpClient
  ) {}
  getData(){
    return this.http.get('https://planetbackend.herokuapp.com/api/menu')
  }
  getDetails(data: string){
    return this.http.get(`https://planetbackend.herokuapp.com/api/${data}`)
  }
}
