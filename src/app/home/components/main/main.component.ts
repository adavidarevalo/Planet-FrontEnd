import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../../core/service/menu.service"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  count = 0 
  constructor(
    private menuService: MenuService
  ) { }


  ngOnInit(): void {
  }

  clickRocket(){
    this.menuService.changeMenu()
  }



}
