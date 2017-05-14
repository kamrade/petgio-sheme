import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger('authState', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)'}),
        animate('200ms 0ms ease-in'),
        style({ transform: 'translateY(0)'})
      ]),
      transition('* => void', [
        style({ transform: 'translateY(0)', opacity: 1}),
        animate('200ms 0ms ease-out'),
        style({ transform: 'translateY(-100%)', opacity: 0})
      ]),

    ])
  ]
})
export class AuthComponent implements OnInit {

  authCurrentState = 'default';

  constructor() { }

  ngOnInit() {
  }


}
