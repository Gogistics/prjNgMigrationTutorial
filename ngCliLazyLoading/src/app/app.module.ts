import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sub-components/navbar/navbar.component';
import { ContentComponent } from './sub-components/content/content.component';
import { HeatmapComponent } from './sub-components/heatmap/heatmap.component';

// Services
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HeatmapComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    ContentComponent
  ]
})
export class AppModule { }
