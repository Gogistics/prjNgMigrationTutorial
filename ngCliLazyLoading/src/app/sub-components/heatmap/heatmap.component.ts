import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import d3 from '../../d3-handler-js';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeatmapComponent implements OnInit, OnChanges {
// get heatmap element
  @ViewChild('heatmap') private heatmapContainer: ElementRef;

  // data; for demo, unnecessary
  @Input() private data: Array<any>;

  // default setting
  private margin: any = { top: 50, bottom: 100, left: 30, right: 30};
  private width: number;
  private height: number;
  private gridSize: number;
  private legendElementWidth;
  private buckets = 9;
  private colors: any = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"];
  private days: any = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  private times: any = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12PM"];

  constructor() {}

  ngOnInit() {
    // this.createChart();

    // unnecessary for simple demo
    if (this.data) {
      this.createChart();
    }
  }

  ngOnChanges(...args: any[]) {
    if (this.data) {
      this.updateChart();
    }
  }

  createChart() {
    // configure element
    let element = this.heatmapContainer.nativeElement; // get heatmap element
    this.width = 960 - this.margin.left - this.margin.right; // set width
    this.height = 430 - this.margin.top - this.margin.bottom; // set height

    this.gridSize = Math.floor(this.width / 24);
    this.legendElementWidth = this.gridSize * 2;

    // append svg
    let svg = d3.select(element).append('svg')
      .attr('id', 'heatmap')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    let gridSize = this.gridSize;
    let dayLabels = svg.selectAll('.dayLabel')
      .data(this.days)
      .enter()
      .append('text')
      .text(function (d: any) { return d; })
      .attr('x', 0)
      .attr('y', function (d: any, i: any) { return i * gridSize + 40; })
      .style('text-anchor', 'end')
      .attr('transform', `translate(-6, ${this.gridSize} / 1.5)`)
      .attr('class', function (d, i) {return ((i >= 0 && i <= 4) ? 'dayLabel mono axis axis-workweek' : 'dayLabel mono axis')});

    let timeLabels = svg.selectAll('.timeLabel')
      .data(this.times)
      .enter()
      .append('text')
      .text(function (d: any) { return d; })
      .attr('x', function (d: any, i: any) { return i * gridSize + 40; })
      .attr('y', 0)
      .style('text-anchor', 'middle')
      .attr('transform', `translate( ${this.gridSize} / 2, -6)`)
      .attr('class', function (d: any, i: any) { return ( (i >= 7 && i <= 16) ? 'timeLabel mono axis axis-worktime' : 'timeLabel mono axis'); });

    let colorScale = d3.scaleQuantile()
      .domain([0, this.buckets - 1, d3.max(this.data, function (d: any) { return d.value; })])
      .range(this.colors);

    // tooltip
    let tool_tip = (<any>d3).tip()
      .attr("class", "d3-tip")
      .offset([5, 0])
      .html(function(d) { return "Day: " + d.day + ' ; Value: ' + d.value; });
    svg.call(tool_tip);

    // cards (rect. of map)
    let cards = svg.selectAll('.hour')
      .data(this.data, function (d: any) { return d.day + ':' + d.hour; });

    cards.append('title');
    cards.enter()
      .append('rect')
      .attr('x', function (d: any) { return (d.hour - 1) * gridSize + 20; })
      .attr('y', function (d: any) { return (d.day - 1) * gridSize + 18; })
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('class', 'hour bordered')
      .attr('width', this.gridSize)
      .attr('height', this.gridSize)
      .style('fill', this.colors[0])
      .on('mouseover', tool_tip.show)
      .on('mouseout', tool_tip.hide)
      .transition()
      .duration(5000)
      .style('fill', function (d: any) { return colorScale(d.value); })
      .select('title')
      .text(function (d) { return d.value; });

    cards.exit().remove();

    let legendElementWidth = this.legendElementWidth,
      colors = this.colors;

    let legend = svg.selectAll('.legend')
      .data( [0].concat( colorScale.quantiles() ), function (d: any) { return d; });

    legend
      .enter()
      .append('g')
      .attr('class', 'legend')
      .append('rect')
      .attr('x', function (d: any, i: any) { return legendElementWidth * i; })
      .attr('y', this.height + 20)
      .attr('width', this.legendElementWidth)
      .attr('height', this.gridSize / 2)
      .style('fill', function (d: any, i: any) { return colors[i]; });

    svg.selectAll('.legend').append('text')
      .attr('class', 'mono')
      .text(function (d: any) { return '≥ ' + Math.round(d); })
      .attr('x', function(d, i) {return legendElementWidth * i; })
      .attr('y', this.height + this.gridSize + 15);

    legend.exit().remove();
  }

  updateChart() {
    let colorScale = d3.scaleQuantile()
      .domain([0, this.buckets - 1, d3.max(this.data, function (d: any) { return d.value; })])
      .range(this.colors);

    d3.select('svg#heatmap')
      .selectAll('.hour')
      .data(this.data, function (d: any) { return d.day + ':' + d.hour; })
      .transition()
      .duration(1000)
      .style('fill', function (d: any) { return colorScale(d.value); })
      .select('title')
      .text(function (d) { return d.value; });
  }
}
