"use client";
import { colors } from "@/styles/theme";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

interface CompareRadialChartProps {
  label: string;
  woman: number;
  man: number;
}

const CompareRadialChart = (props: CompareRadialChartProps) => {
  const { label, woman, man } = props;
  const [series, setSeries] = useState<number[]>([woman, man]);

  const options = {
    colors: [colors.main, colors.secondary],
    labels: [` 여성 ${series[0]}%`, ` 남성 ${series[1]}%`],
    legend: {
      show: true,
      position: "bottom" as "bottom",
      floating: true,
      fontSize: "14px",
      fontFamily: "Noto Sans KR",
      fontWeight: 400,
      labels: {
        colors: colors.white,
      },
    },
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        startAngle: -30,
        endAngle: 330,
        offsetX: 0,
        offsetY: 0,
        track: {
          show: true,
          background: "#323232",
          strokeWidth: "97%",
          opacity: 1,
          margin: 10,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        hollow: {
          size: "35%", // 내부 원 크기
        },
        dataLabels: {
          show: false, // 가운데 값 안보이게
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: "Noto Sans KR",
            offsetY: 0,
          },
        },
      },
    },
    stroke: {
      lineCap: "round" as "round",
    },
  };

  return (
    <>
      <Layout className="donut">
        <Label>{label}</Label>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width="330"
          height="330"
        />
      </Layout>
    </>
  );
};

export default CompareRadialChart;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  width: fit-content;
`;
