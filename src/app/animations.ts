import { trigger, state, style, transition, animate } from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
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
]);

export const numberEnteredStateTrigger = trigger('numberEnteredState', [
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
    animate('120ms 0ms ease-in', style({
      backgroundColor: 'red',
      transform: 'scale(1.2)'
    })),
    animate(120)
  ])
]);
