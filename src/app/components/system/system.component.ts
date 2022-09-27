import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ height: 0 })),
      state('expanded', style({ height: '*' })),
      transition('initial <=> expanded', animate('0.3s')),
    ]),
  ],
})
export class SystemComponent implements OnInit {

  selectPlanet:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  handleClick () {
    this.selectPlanet = !this.selectPlanet
    console.log(this.selectPlanet);
    
    
  }
}
