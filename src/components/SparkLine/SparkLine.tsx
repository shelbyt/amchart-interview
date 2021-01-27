import { Component } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export interface SparkLineProps {}

interface SparkLineState {}

export class SparkLine extends Component<SparkLineProps, SparkLineState> {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    chart.data = [
      {
        date: new Date(2018, 3, 17),
        value: 0,
      },
      {
        date: new Date(2018, 3, 18),
        value: 60,
      },
      {
        date: new Date(2018, 3, 19),
        value: 45,
      },
      {
        date: new Date(2018, 3, 20),
        value: 90,
      },
      {
        date: new Date(2018, 3, 21),
        value: 102,
      },
      {
        date: new Date(2018, 3, 22),
        value: 65,
      },
      {
        date: new Date(2018, 3, 23),
        value: 62,
      },
      {
        date: new Date(2018, 3, 24),
        value: 55,
      },
      {
        date: new Date(2018, 3, 25),
        value: 81,
      },
    ];

    chart.paddingLeft = 0;
    chart.paddingRight = 0;
    chart.responsive.enabled = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // @ts-ignore
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.inside = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.stroke = am4core.color("#3586FF");
    series.strokeWidth = 2;
    series.tooltipText = "{valueY.value}";

    var bullet = series.bullets.push(new am4charts.Bullet());
    var circle = bullet.createChild(am4core.Circle);
    circle.width = 10;
    circle.height = 10;
    circle.stroke = am4core.color("#FFF", 0);
    circle.fill = am4core.color("#FFF", 0);
    circle.adapter.add("fill", function(fill, target) {
      if (!target.dataItem) {
        return fill;
      }
      var values = target.dataItem.values;
      return values.valueY.value === 65
        ? am4core.color("#3586FF")
        : fill;
    });

    chart.cursor = new am4charts.XYCursor();

    // @ts-ignore
    this.chart = chart;
  }

  componentWillUnmount() {
    // @ts-ignore
    if (this.chart) {
      // @ts-ignore
      this.chart.dispose();
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: '100%', height: '100px' }}></div>;
  }
}
