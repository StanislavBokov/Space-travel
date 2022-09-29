import { Component, Input, OnInit } from '@angular/core';
import { AstrObject } from 'src/app/models/astronomicalOblect';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() handleClick:Function
  @Input() selectedAstrObject: AstrObject
  ngOnInit(): void {
  }
  onEvent(event:Event) {
    event.stopPropagation();
 }
}
