import { Component } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html'
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

//@Input y @Output son decoradores que comunican a un componente padre
  //con su hijo inmediato
//El flujo de datos es UNIDIRECCIONAL
//No son elementos reactivos
//Para pasar datos a componentes anidados hay que pasar
 //por los componentes intermedios (= prop drilling en React)
