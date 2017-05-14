import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('viewState', [
      state('default', style({
        height: '3rem',
        width: '6rem'
      })),
      state('expanded', style({
        height: '100%',
        width: '6rem'
      })),
      state('wide', style({
        height: '100%',
        width: '9rem'
      })),
      transition('* <=> *', animate('200ms 0ms ease-in'))
    ]),
    trigger('expandButton', [
      state('default', style({
        opacity: 0
      })),
      state('expanded', style({
        opacity: 1
      })),
      transition('default <=> expanded', animate('200ms 0ms ease-in'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  viewStateValue = 'default';
  expandButtonState = 'default'

  constructor() { }

  ngOnInit() {
  }

  sidebarControl() {
    this.viewStateValue === 'default' ?
      this.viewStateValue = 'expanded' : this.viewStateValue = 'default';
    this.expandButtonState = this.viewStateValue;
  }

  sidebarWide() {
    this.viewStateValue === 'expanded' ?
      this.viewStateValue = 'wide' : this.viewStateValue = 'expanded'
  }

}
