import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { astrObject as data } from 'src/app/mock/planets/mockPLanets';
import { AstrObject } from 'src/app/models/astronomicalOblect';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-astronomical-object',
  templateUrl: './about-astronomical-object.component.html',
  styleUrls: ['./about-astronomical-object.component.scss']
})
export class AboutAstronomicalObjectComponent implements OnInit {
  astrObjects = data
  id:string
  astrObject: AstrObject

  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params=>this.id=params['id']);
   }
  
  ngOnInit(): void {
    this.astrObject = (this.astrObjects.find((el) => el.id === this.id))!
    
  }
}
