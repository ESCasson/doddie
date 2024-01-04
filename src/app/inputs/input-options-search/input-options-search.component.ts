import { Component } from '@angular/core';

@Component({
  selector: 'app-input-options-search',
  templateUrl: './input-options-search.component.html',
  styleUrl: './input-options-search.component.scss'
})
export class InputOptionsSearchComponent {

  searchInput: string = '';

  onChange() {
    console.log('hits')
    setTimeout(() => {
      if (this.searchInput.length > 2) {
        console.log('search input change', this.searchInput)
      }
    }, 20)
  }


  
}
