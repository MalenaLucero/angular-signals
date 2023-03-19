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
  }

  ngOnDestroy(): void {
    this.$subject?.unsubscribe();
  }
}
