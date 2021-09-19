import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../../../core/service/api-fetch.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = true;
  platensItems: any = []

  constructor(
    private apiFetchService: ApiFetchService
  ) { }

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
