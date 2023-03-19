import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-example-child',
  templateUrl: './input-example-child.component.html',
  styleUrls: ['./input-example-child.component.css']
})
export class InputExampleChildComponent {
  @Input() inputValue = 0;
  @Output() updateParentValue = new EventEmitter<number>;

  update() {
    this.inputValue +=1;
  }

  updateWithOutput() {
    this.updateParentValue.emit(this.inputValue);
  }
}
