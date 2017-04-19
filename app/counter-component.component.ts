import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  inputs: ['counter'],
  template: `
    <div class="design">
      <input type="button" (click)="decrementCounter()" value="-"/> {{counterValue}} <input type="button" (click)="incrementCounter()" value="+"/>
      
    </div>
  `,
  styles: ['.design{border: 2px solid red; width: 70px; padding: 3px; }']
})

export class CounterComponentComponent implements OnInit {
  @Output() counterChange;
  // private _counter: number;
  counterValue: number;

  set counter(val: number) {
    // this._counter = val;
    //console.log(val);
    this.counterValue = val || 0;
  }
  constructor() {
    this.counterChange = new EventEmitter();
    this.counterValue = 0;
  }
  incrementCounter() {
    this.counterValue += 1;
    this.counterChange.emit(this.counterValue);
    // this.counter += 1;
    // this.counterChange.emit(this.counter);
  }
  decrementCounter() {
    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue);
    // this.counter += 1;
    // this.counterChange.emit(this.counter);
  }
  ngOnInit() {
  }

}
