"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";
import { colors } from "@/styles/theme";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// 툴팁 나타날 때
ChartJS.register({
  id: "writeLine",
  afterDraw: function (chart: any, easing: any) {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const activePoint = chart.tooltip._active[0];
      const ctx = chart.ctx;
      const x = activePoint.element.x;
      const y = activePoint.element.y;

      // 세로선 그리기
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.mainLight6;
      ctx.stroke();
      ctx.restore();

      // point smog 그리기
      const ctx2 = chart.ctx;
      ctx2.save();
      ctx2.beginPath();
      ctx2.arc(x, y, 12, 0, 2 * Math.PI);
      ctx2.strokeStyle = "#FFEFF14D";
      ctx2.stroke();
      ctx2.fillStyle = "#FFEFF14D";
      ctx2.fill();
      ctx2.restore();

      // point border 그리기
      const ctx3 = chart.ctx;
      ctx3.save();
      ctx3.beginPath();
      ctx3.arc(x, y, 8, 0, 2 * Math.PI);
      ctx3.strokeStyle = "#FFD2D7";
      ctx3.stroke();
      ctx3.fillStyle = "#FFD2D7";
      ctx3.fill();
      ctx3.restore();

      // point 그리기
      const ctx4 = chart.ctx;
      ctx4.save();
      ctx4.beginPath();
      ctx4.arc(x, y, 6, 0, 2 * Math.PI);
      ctx4.stroke();
      ctx4.fillStyle = colors.main;
      ctx4.fill();
      ctx4.restore();
    }
  },
});

export function LineChart() {
  const data = () => {
    return {
      labels: [
        "23-03-02",
        "23-03-04",
        "23-03-06",
        "23-03-08",
        "23-03-10",
        "23-03-12",
      ],
      datasets: [
        {
          data: [33, 53, 45, 60, 44, 65],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0.02, "#D33B4D");
            gradient.addColorStop(1, "#26262600");
            return gradient;
          },
          borderColor: colors.main,
          borderWidth: 2,
          pointRadius: 3,
          pointBorderColor: colors.mainLight1,
          pointBackgroundColor: colors.mainLight1,
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: false,
    scales: {
      x: {
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
        ticks: { color: "#fff", padding: 26 },
      },
      y: {
        grid: {
          color: "#FFEFF11A",
        },
        ticks: { color: "#fff" },
      },
    },
    elements: {
      line: {
        tension: 0.35,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index" as "index", // 가까워지면 툴팁 나타남
        intersect: false,
        displayColors: false,
        backgroundColor: colors.main,
        titleColor: colors.grey4,
        titleFont: {
          fontFamily: "Noto Sans KR",
          fontSize: 14,
          weight: 400,
        },
        titleSpacing: 0.14,
        titleMarginBottom: 4,
        bodyFont: { fontFamily: "Noto Sans KR", fontSize: 14, weight: 700 },
        bodySpacing: 2,
        padding: {
          top: 15,
          bottom: 15,
          left: 30,
          right: 30,
        },
        usePointStyle: true,
        caretPadding: 30,
        caretSize: 10,
        cornerRadius: 10,
        callbacks: {
          label: (context: any) => {
            let label = "";
            if (context.parsed.y) {
              label = context.parsed.y + "건 검색";
            }
            return label;
          },
          labelTextColor: function (context: any) {
            return colors.grey4;
          },
        },
      },
    },
    interaction: {
      intersect: true,
      axes: "x",
    },
  };

  return (
    <ChartWrapper>
      <Line width="1200" height="400" data={data()} options={options} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
