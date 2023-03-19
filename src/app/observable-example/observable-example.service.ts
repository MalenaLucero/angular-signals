import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableExampleService {
  $subject = new BehaviorSubject(0);

  update() {
    let currentValue = 0;
    if (this.$subject !== undefined) {
      this.$subject.pipe(take(1)).subscribe(res => {
        currentValue = res;
      })
      this.$subject.next(currentValue + 1)
    }
  }
}
