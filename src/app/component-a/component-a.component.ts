import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit{
  numberSignal = signal(0);
  effectValue = 0;

  constructor() {}

  ngOnInit(): void {
    this.numberSignal.set(1);
    effect(() => this.effectValue = this.numberSignal());
  }

  update() {
    this.numberSignal.set(this.numberSignal() + 1);
  }

  // normalFunction() {
  //   console.log('normal function execution');
  //   return 'normal function return string';
  // }
}
