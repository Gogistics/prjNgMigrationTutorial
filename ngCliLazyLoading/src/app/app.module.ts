import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sub-components/navbar/navbar.component';
import { ContentComponent } from './sub-components/content/content.component';
import { CustomListComponent } from './sub-components/custom-list/custom-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    CustomListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, ContentComponent]
})
export class AppModule { }
