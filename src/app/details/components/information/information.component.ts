import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../../../core/service/api-fetch.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  data: any = false
  name: string = ''
  overview: boolean = true
  structure: boolean = false
  surface: boolean = false
  constructor(
    private apiFetchService: ApiFetchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.name = params.name;
      this.fetchDetails(this.name)
    })
  }

  fetchDetails(info: string){
    this.apiFetchService.getDetails(info)
    .subscribe(information => {
      this.data = information;
      console.log('data ', this.data)
    })
  }
  changeInformation(){
    this.overview= false
    this.structure= false
    this.surface= false
    console.log('xxx ',this.overview)
  }

}
