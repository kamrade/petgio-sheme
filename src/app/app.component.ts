import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger
  ]
})
export class AppComponent {
  clickInfo = 'default';
  simpleState = 'default';
  paragraphInfo = 'default';
  numberEntered;

  onClickSimple() {
    this.simpleState == 'default' ? this.simpleState = 'clicked' : this.simpleState = 'default';
    this.clickInfo = this.simpleState;
  }

  onMousedownSimple() {
    this.clickInfo = 'mousedown';
  }

  onClickParagraph() {
    this.paragraphInfo == 'default' ? this.paragraphInfo = 'clicked' : this.paragraphInfo = 'default';
  }
}
