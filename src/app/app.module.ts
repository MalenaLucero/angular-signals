import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignalExampleComponent } from './signal-example/signal-example.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { InputExampleChildComponent } from './input-example/input-example-child/input-example-child.component';
import { ObservableExampleChildComponent } from './observable-example/observable-example-child/observable-example-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalExampleComponent,
    InputExampleComponent,
    ObservableExampleComponent,
    InputExampleChildComponent,
    ObservableExampleChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
