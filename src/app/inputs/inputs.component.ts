import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Input as InputClass} from './input';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  @Input() typesOfSports!: string[]| null;
  @Output() infoInputted = new EventEmitter<{ inputs: InputClass }>();

  averageStride = 0.78

  model = new InputClass(this.averageStride, true, 'Ballet', 0, true)

  submitted = false;

  onSubmit() { this.submitted = true; }

  onSexChange(value: any) { 
    if(value.target.value === 'true'){
      this.model.isMale = true
     return this.averageStride = 0.78
    }
    this.model.isMale = false
    return this.averageStride = 0.7
  }

  onTimeChange(event: any){
    if(this.model.timeMin <= 0)  return
     setTimeout(()=>{
      console.log('time change')
      if(!this.model.stepLength || this.model.stepLength <=0 ){
        this.model.stepLength = this.averageStride
      }
      this.infoInputted.emit({ inputs: this.model })
     }, 100)
  }
}
