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
      const activePoint2 = chart.tooltip._active[1];
      const activePoint3 = chart.tooltip._active[2];
      const ctx = chart.ctx;
      const x = activePoint.element.x;
      const y = activePoint.element.y;
      const x2 = activePoint2.element.x;
      const y2 = activePoint2.element.y;
      const x3 = activePoint3.element.x;
      const y3 = activePoint3.element.y;

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

      // point smog 그리기
      const ctx5 = chart.ctx;
      ctx5.save();
      ctx5.beginPath();
      ctx5.arc(x2, y2, 12, 0, 2 * Math.PI);
      ctx5.strokeStyle = "#FFEFF14D";
      ctx5.stroke();
      ctx5.fillStyle = "#FFEFF14D";
      ctx5.fill();
      ctx5.restore();

      // point border 그리기
      const ctx6 = chart.ctx;
      ctx6.save();
      ctx6.beginPath();
      ctx6.arc(x2, y2, 8, 0, 2 * Math.PI);
      ctx6.strokeStyle = "#8195ff";
      ctx6.stroke();
      ctx6.fillStyle = "#8195ff";
      ctx6.fill();
      ctx6.restore();

      // point 그리기
      const ctx7 = chart.ctx;
      ctx7.save();
      ctx7.beginPath();
      ctx7.arc(x2, y2, 6, 0, 2 * Math.PI);
      ctx7.stroke();
      ctx7.fillStyle = "#8195ff";
      ctx7.fill();
      ctx7.restore();

      // point smog 그리기
      const ctx8 = chart.ctx;
      ctx8.save();
      ctx8.beginPath();
      ctx8.arc(x3, y3, 12, 0, 2 * Math.PI);
      ctx8.strokeStyle = "#FFEFF14D";
      ctx8.stroke();
      ctx8.fillStyle = "#FFEFF14D";
      ctx8.fill();
      ctx8.restore();

      // point border 그리기
      const ctx9 = chart.ctx;
      ctx9.save();
      ctx9.beginPath();
      ctx9.arc(x3, y3, 8, 0, 2 * Math.PI);
      ctx9.strokeStyle = "#F1F3FF";
      ctx9.stroke();
      ctx9.fillStyle = "#F1F3FF";
      ctx9.fill();
      ctx9.restore();

      // point 그리기
      const ctx10 = chart.ctx;
      ctx10.save();
      ctx10.beginPath();
      ctx10.arc(x3, y3, 6, 0, 2 * Math.PI);
      ctx10.stroke();
      ctx10.fillStyle = "#F1F3FF";
      ctx10.fill();
      ctx10.restore();
    }
  },
});

export function MultiLineChart() {
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
          data: [33, 53, 45, 60, 14, 55],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.01, "#D33B4D");
            gradient.addColorStop(1, "#26262600");
            return gradient;
          },
          borderColor: colors.main,
          borderWidth: 2,
          pointRadius: 3,
          pointBorderColor: colors.mainLight1,
          pointBackgroundColor: colors.mainLight1,
        },
        {
          data: [33, 20, 80, 40, 44, 45],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0.01, "#8195FF");
            gradient.addColorStop(1, "#26262600");
            return gradient;
          },
          borderColor: "#8195FF",
          borderWidth: 2,
          pointRadius: 3,
          pointBorderColor: "#8195FF",
          pointBackgroundColor: "#8195FF",
        },
        {
          data: [10, 63, 20, 50, 46, 65],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 700);
            gradient.addColorStop(0.01, "#E3E3E3");
            gradient.addColorStop(1, "#26262600");
            return gradient;
          },
          borderColor: "#E3E3E3",
          borderWidth: 2,
          pointRadius: 3,
          pointBorderColor: "#E3E3E3",
          pointBackgroundColor: "#E3E3E3",
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
        backgroundColor: "#393939",
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
      <Line width="1200" height="500" data={data()} options={options} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
