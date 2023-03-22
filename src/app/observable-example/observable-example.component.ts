import { ObservableExampleService } from './observable-example.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit, OnDestroy{
  $subject: BehaviorSubject<number> | undefined;

  constructor(private observableExampleService: ObservableExampleService) {}

  ngOnInit(): void {
    this.$subject = this.observableExampleService.$subject;
  }

  update() {
    let currentValue = 0;
    if (this.$subject !== undefined) {
      this.$subject.pipe(take(1)).subscribe(res => {
        currentValue = res;
      })
      this.$subject.next(currentValue + 1)
    }
    //this.observableExampleService.update();
  }

  ngOnDestroy(): void {
    this.$subject?.unsubscribe();
  }

  //Behaviour Subject es un tipo de observable de Rxjs
  //Los observables son streams de datos
  //Son elementos reactivos
  //Para leerlos hay que subscribirse con .subscribe()
  //Para modificar el valor en un Behaviour Subject se usa .next()
  //Angular no usa los obervables internamente para manejar el estado
   //ni los recomienda explicitamente

  //PROBLEMAS:
  //Sintaxis con mucho boilerplate y curva de aprendizaje empinada
  //Hay que usar el pipe async para usarlos en el template
  //Hay que recordar desuscribirse para no tener problemas de memoria
}
