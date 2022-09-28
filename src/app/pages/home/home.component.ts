import { Component, OnInit } from '@angular/core';
import { planets as data } from '../../mock/planets/mockPLanets'
import { AstronomicalObject } from 'src/app/models/astronomicalOblect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOpenPlanet = false
  selectedPlanet:any = null

  planets = data
  constructor() { }

  ngOnInit(): void {
  }
  
  handleClick = (event: any) => {
    if(event) {
      console.log(event.target.dataset.planet);
      this.selectedPlanet = this.planets.find((el) => el.id === event.target.dataset.planet)
      console.log(  this.selectedPlanet);
      
    }
 
    
    this.isOpenPlanet = !this.isOpenPlanet
    console.log(this.isOpenPlanet); 
  }
}
