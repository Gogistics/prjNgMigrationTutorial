import { Component, OnInit } from '@angular/core';
import { Animations } from '../../animations';
let customAnimations = new Animations();

@Component({
  moduleId: module.id.toString(),
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    customAnimations.getAnimation('fadeInAnimation')
  ],
  host: { '[@fadeInAnimation]': '' }
})
export class ContentComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  
  doSearch(term:string) {
  }
}
