import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface SelectOption {
  id: number;
  title: string;
  value: string;
}

@Component({
  selector: 'app-input-options-search',
  templateUrl: './input-options-search.component.html',
  styleUrl: './input-options-search.component.scss'
})
export class InputOptionsSearchComponent {
  @Input()
  options: SelectOption[] = [];
  @Output() selectedValue = new EventEmitter<{ value: string }>();

  filteredOptions: SelectOption[]=[];
  searchInput: string = '';

  selected: string | undefined;

  ngOnInit() {
    if(this.options){
     this.filteredOptions = this.options
    }
  }

  onChange() {
    console.log('hits')
    setTimeout(() => {
        this.searchOptions()
    }, 20)
  }

  searchOptions(){
    const filtered = this.options.filter((option) => {
      console.log(option.title.search(new RegExp(`${this.searchInput}`, 'i')))
      return option.title.search(new RegExp(`${this.searchInput}`, 'i')) !== -1
    })
    if(filtered.length > 0) return this.filteredOptions = filtered
    return this.filteredOptions = this.options
  } 

  onSelectedChange(){
    if(!this.selected) return
    this.selectedValue.emit({ value: this.selected })
  }
}
