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
        backgroundColor: 'orange',
        width: '100%',
        height: '100px'
      })),
      state('mousedown', style({
        backgroundColor: 'red'
      })),
      transition('default => clicked', animate('200ms 100ms ease-in')),
      transition('clicked => default', animate('400ms 100ms ease-out')),
      transition('mousedown <=> default', animate('400ms 100ms ease-out')),
      transition('mousedown <=> clicked', animate('400ms 100ms ease-out'))
    ]),
    trigger('numberEnteredState', [
      state('unselected', style({
        border: '1px solid #333',
        padding: '5px',
        backgroundColor: 'white',
        color: '#333'
      })),
      state('selected', style({
        border: '2px solid red',
        padding: '4px',
        backgroundColor: '#333',
        color: 'white'
      })),
      transition('unselected => selected', [
        style({
          border: '2px solid #333',
          padding: '4px'
        }),
        animate(2000, style({
          backgroundColor: 'red'
        })),
        animate(2000)
      ])
    ])
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
