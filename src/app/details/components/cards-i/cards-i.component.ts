import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-i',
  templateUrl: './cards-i.component.html',
  styleUrls: ['./cards-i.component.scss']
})
export class CardsIComponent implements OnInit {
  @Input() infoContainer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
