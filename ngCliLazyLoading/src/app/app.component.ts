import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app root!';
  private chartData: Array<any>;
  private heatMapData: Array<any>;
  constructor() {}

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData(); // chart
      this.generateHeatMapData(); // heatmap

      // change the data periodically
      setInterval(() => this.generateData(), 5000);
      setInterval(() => this.generateHeatMapData(), 5000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

  generateHeatMapData() {
    this.heatMapData = [];
    // day
    for (let i = 1; i < 8; i++) {
      // hour
      for (let j = 1; j < 25; j++) {
        this.heatMapData.push({day: i, hour: j, value: Math.round(Math.random() * 20)});
      }
    }
  }
}
