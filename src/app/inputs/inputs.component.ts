import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Input as InputClass} from './input';
import { SelectOption } from './input-options-search/input-options-search.component';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent implements OnInit {
  @Input() typesOfSports!: string[]| null;
  @Output() infoInputted = new EventEmitter<{ inputs: InputClass }>();

  averageStepLength = 0.78
  actualStepLength!: number | null;

  model = new InputClass(this.averageStepLength, true, 'Ballet', 0, true)

  submitted = false;

  typesOfSportsForSearchSelect: SelectOption[] = []

  ngOnInit() {
    if(this.typesOfSports){
     this.typesOfSportsForSearchSelect = this.typesOfSports.map((type, index)=>{
       return {id: index, title: type, value: type}
     })
    }
  }

  onSubmit() { this.submitted = true; }

  onSexChange(value: any) { 
    if(value.target.value === 'true'){
     this.model.isMale = true
     this.averageStepLength = 0.78
     return this.onInputChange()
    }
    this.model.isMale = false
    this.averageStepLength = 0.7
    return this.onInputChange()
  }

  getStepLength(){
    if(this.actualStepLength && this.actualStepLength >= 0.5){
      return this.actualStepLength
    }
    return this.averageStepLength
  }

  onInputChange(){
    if(this.model.timeMin <= 0)  return
     setTimeout(()=>{
      this.model.stepLength = this.getStepLength()
      this.infoInputted.emit({ inputs: this.model })
     }, 100)
  }

  onActivitySelected(eventData: {value: string}){
    this.model.activity = eventData.value
    this.onInputChange()
  }
}
