import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-example-child',
  templateUrl: './input-example-child.component.html',
  styleUrls: ['./input-example-child.component.css']
})
export class InputExampleChildComponent implements OnChanges{
  _inputValue: number = 0;
  @Input() set inputValue(value: number) {
    console.log('@Input set in input-example-child.component')
    this._inputValue = value;
  }
  @Output() updateParentValue = new EventEmitter<number>;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes in ngOnChanges', changes);
  }

  update() {
    this._inputValue +=1;
  }

  updateWithOutput() {
    this.updateParentValue.emit(this._inputValue);
  }
}
