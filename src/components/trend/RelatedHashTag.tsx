"use client";

import { styled } from "styled-components";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useEffect } from "react";

const RelatedHashTag = () => {
  useEffect(() => {
    // Chart 생성 및 설정
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );
    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    networkSeries.data = [
      {
        name: "올리브영",
        children: [],
      },
      {
        name: "cj 대한통운",
        children: [],
      },
      {
        name: "cj 푸드빌",
        children: [],
      },
      {
        name: "딸",
        children: [],
      },
      {
        name: "육아",
        children: [],
      },
      {
        name: "결혼",
        children: [],
      },
    ];
    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";
    networkSeries.links.template.distance = 0.5;
    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.nodes.template.outerCircle.scale = 4;

    networkSeries.nodes.template.label.text = "{name}";
    networkSeries.fontSize = 14;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;
    networkSeries.minRadius = am4core.percent(9);
    networkSeries.manyBodyStrength = -5;
    networkSeries.links.template.strokeOpacity = 0;

    networkSeries.nodes.template.events.on("hit", () => {
      window.location.href = "/trend/compare";
    });

    return () => {
      chart.dispose();
    };
  }, []);

  return <ChartWrapper id="chartdiv" />;
};

export default RelatedHashTag;

const ChartWrapper = styled.div`
  display: flex;
  height: 22rem;
`;
