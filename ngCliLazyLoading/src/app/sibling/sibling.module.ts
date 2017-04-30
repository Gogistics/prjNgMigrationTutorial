import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SiblingComponent } from './sibling.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [ SiblingComponent ],
  bootstrap: [ SiblingComponent ]
})
export class SiblingModule { }
