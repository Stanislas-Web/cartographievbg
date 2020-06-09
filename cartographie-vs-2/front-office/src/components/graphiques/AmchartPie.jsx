import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import {formatDataForAmChartPie} from "../../services/helpers/amChart.helper"
class AmchartPie extends Component {
  // constructor(){
  //   super()
  //   this.props.tagName = this.props.tagName.replace(" ","-");
  // }
  componentDidMount() {
    // am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    const {dataFormated ,tagName} = this.props;
    let chart = am4core.create(tagName, am4charts.PieChart);
    chart.data = formatDataForAmChartPie(dataFormated);
    chart.innerRadius = 50;
    // Création des series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "nombre";
    pieSeries.dataFields.category = "label";
  }

  render() {
    return (
      <div>
        <div id={this.props.tagName} style={{ width: "100%", height:  this.props.height ? this.props.height : "250px"} }></div>
      </div>
    );
  }
}

export default AmchartPie;
