import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  componentCounterValue: number = 9;

  parentChangeCounter(data: number) {
    this.componentCounterValue = data;
  }
}
