import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../../../core/service/api-fetch.service'
import { MenuService } from "../../../core/service/menu.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = true;
  platensItems: any = []

  constructor(
    private apiFetchService: ApiFetchService,
    private menuService: MenuService
  ) {
    this.menuService.menuContainer$.subscribe(item =>{
      console.log(item)
      this.menu = item
    })
   }

  ngOnInit(): void {
    this.fetchPlanets()
  }

  changeMenu() {
    this.menu = !this.menu
  }

  fetchPlanets(){
    this.apiFetchService.getData()
    .subscribe(planet => {
      this.platensItems = planet
    })
  }

}
