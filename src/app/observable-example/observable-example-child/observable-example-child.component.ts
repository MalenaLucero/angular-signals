import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ObservableExampleService } from '../observable-example.service';

@Component({
  selector: 'app-observable-example-child',
  templateUrl: './observable-example-child.component.html',
  styleUrls: ['./observable-example-child.component.css']
})
export class ObservableExampleChildComponent implements OnInit, OnDestroy{
  $subject: BehaviorSubject<number> | undefined;

  constructor(private observableExampleService: ObservableExampleService) {}

  ngOnInit(): void {
    this.$subject = this.observableExampleService.$subject;
    this.$subject.subscribe(() => console.log('$subject subscribe in observable-example-child.component'))
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
