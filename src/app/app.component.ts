import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state('clicked', style({
        backgroundColor: 'lightblue',
        width: '100%',
        height: '100px'
      })),
      transition('default => clicked', animate('200ms 100ms ease-in')),
      transition('clicked => default', animate('400ms 100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  clickInfo = 'default';

  onClickSimple() {
    this.clickInfo == 'default' ? this.clickInfo = 'clicked' : this.clickInfo = 'default'
  }
}
