import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CustomListComponent } from './custom-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule
  ],
  declarations: [ CustomListComponent ],
  bootstrap:    [ CustomListComponent ]
})
export class CustomListModule { }
