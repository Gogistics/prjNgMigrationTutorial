import { Component, OnInit } from '@angular/core';
import { Animations } from 'app/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as Rx from 'rxjs';

let customAnimations = new Animations();

@Component({
  moduleId: module.id.toString(),
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css']
})
export class CustomListComponent implements OnInit {
  constructor(private http: Http) {}

  ngOnInit() {
    let resp = this.http.get('/api').map(res => res.json());
    console.log(resp);
  }
}
