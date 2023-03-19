import { Component } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css']
})
export class InputExampleComponent {
  inputValue = 0;

  update() {
    this.inputValue +=1;
  }

  updateWithOutput(event: number) {
    this.inputValue = event;
  }
}
