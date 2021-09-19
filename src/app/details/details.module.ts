import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { DetailsRoutingModule } from './details-routing.module';
import { CardsIComponent } from './components/cards-i/cards-i.component'
import { MaterialModule } from '../material/material.module'
import { ApiFetchService } from '../core/service/api-fetch.service';
import { SpinnerComponent } from './components/spinner/spinner.component'



@NgModule({
  declarations: [
    InformationComponent,
    CardsIComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialModule
  ]
})
export class DetailsModule { }
