import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs"


@Injectable({
  providedIn: 'root'
})

export class MenuService {
  private MenuBoolean = true;
  private MenuContainer = new BehaviorSubject(true)
  constructor() { }
  menuContainer$ = this.MenuContainer.asObservable();
  
   changeMenu(){
    this.MenuBoolean = !this.MenuBoolean
    this.MenuContainer.next(this.MenuBoolean)
    console.log( this.MenuBoolean)
  } 
}
