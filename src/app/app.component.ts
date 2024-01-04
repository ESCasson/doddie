import { Component } from '@angular/core';
import * as values from './values.json'
import { Input } from './inputs/input.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'doddie';
  typesOfSports: string[]|null = null
  stepsData: Record<string, number> = values
  distance: number | null = null;
  unit: string = 'Miles'

  ngOnInit(){
    this.typesOfSports = Object.keys(values)
  }

  onInfoInputted(eventData: { inputs: Input }){
    const inputs = eventData.inputs
    const steps = this.stepsData[inputs.activity]*inputs.timeMin
    const distanceKm = (steps*inputs.stepLength)/1000
    this.distance = inputs.isMiles? distanceKm*0.621371 : distanceKm
    this.unit = inputs.isMiles? 'Miles': 'Km'
  }
}
