import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {
  @Input() datafirst: any;
  @Output() 
  send: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  closeMenu(){
    this.send.emit(true)
  }

}
