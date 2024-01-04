import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOptionsSearchComponent } from './input-options-search.component';

describe('InputOptionsSearchComponent', () => {
  let component: InputOptionsSearchComponent;
  let fixture: ComponentFixture<InputOptionsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOptionsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputOptionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
