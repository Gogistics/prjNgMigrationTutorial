import { Component, OnInit } from '@angular/core';
import { Animations } from '../../../app/animations';
let customAnimations = new Animations();

import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      // route 'enter' transition
      transition(':enter', [
        // styles at start of transition
        style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('.3s', style({ opacity: 1 }))
      ]),
    ])
  ],
  host: { '[@fadeInAnimation]': '' }
})
export class ContentComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  
  doSearch(term:string) {
  }
}
