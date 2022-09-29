import { AstrObject } from './../../models/astronomicalOblect';
import { Component, OnInit } from '@angular/core';
import { astrObject as data } from '../../mock/planets/mockPLanets'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOpenPlanet = false
  selectedAstrObject:AstrObject

  planets = data
  constructor() { }

  ngOnInit(): void {
  }
  
  handleClick = (event: Event) => {
    if(event) {
      this.selectedAstrObject = (this.planets.find((el) => el.id === (event.target as HTMLElement).dataset.planet))!
    }

    this.isOpenPlanet = !this.isOpenPlanet
  }
}
