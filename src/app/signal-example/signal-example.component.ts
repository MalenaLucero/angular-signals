import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  templateUrl: './signal-example.component.html',
  styleUrls: ['./signal-example.component.css']
})
export class SignalExampleComponent implements OnInit{
  numberSignal = signal(0);
  effectValue = 0;
  nonEffectValue = 0;

  constructor() {}

  ngOnInit(): void {
    this.numberSignal.set(1);

    //get al valor estatico (no se queda escuchando)
    this.nonEffectValue = this.numberSignal();

    //se ejecuta con cada cambio del signal
    effect(() => {
      console.log('effect executed')
      this.effectValue = this.numberSignal()
    });
  }

  update() {
    this.numberSignal.set(this.numberSignal() + 1);
  }

  // normalFunction() {
  //   console.log('normal function execution');
  //   return 'normal function return string';
  // }









  //Los signals son wrappers de un valor (number, string, object)
  //Son tipos primitivos reactivos
  //Registra las partes del codigo que dependen de él
    //y las notifica cuando hay cambios
  //No dependen de zone.js (mejoraria la performance porque los cambios serian especificos)
  //Sintaxis mas simple que los observables









  //Continuará:
   //Dónde se definen? En componentes o servicios?
   //Cómo se exponen?
   //Cómo se consumen desde otros componentes?
}
