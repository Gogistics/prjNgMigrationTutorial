import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SiblingComponent } from './sibling.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [ SiblingComponent ],
  bootstrap: [ SiblingComponent ]
})
export class SiblingModule { }
