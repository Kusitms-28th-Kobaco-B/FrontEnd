import { colors } from "@/styles/theme";
import styled from "styled-components";

interface BarChartProps {
  label: string;
  color?: string;
  infoData: {
    category: string;
    ratio: number;
  }[];
}

const CompareBarChart = (props: BarChartProps) => {
  const { label, color, infoData } = props;
  const ratioSum = infoData[0].ratio + infoData[1].ratio + infoData[2].ratio;

  return (
    <>
      <Layout>
        <Label>{label}</Label>
        <ChartWrapper>
          <BarWrapper>
            <Ratio>{`${infoData[0].ratio}%`}</Ratio>
            <Bar
              height={`${(infoData[0].ratio / ratioSum) * 500}px`}
              color={color ? color : colors.grey05}
            />
            <Legend weight={700}>{`${infoData[0].category}`}</Legend>
          </BarWrapper>
          <BarWrapper>
            <Ratio>{`${infoData[1].ratio}%`}</Ratio>
            <Bar
              height={`${(infoData[1].ratio / ratioSum) * 500}px`}
              color={colors.grey05}
            />
            <Legend weight={500}>{`${infoData[1].category}`}</Legend>
          </BarWrapper>
          <BarWrapper>
            <Ratio>{`${infoData[2].ratio}%`}</Ratio>
            <Bar
              height={`${(infoData[2].ratio / ratioSum) * 500}px`}
              color={colors.grey05}
            />
            <Legend weight={500}>{`${infoData[2].category}`}</Legend>
          </BarWrapper>
        </ChartWrapper>
      </Layout>
    </>
  );
};

export default CompareBarChart;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

const ChartWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 2.25rem;
  margin-top: 1.5rem;
`;

const Label = styled.div`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 100px;
  width: fit-content;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
  justify-content: end;
  align-items: center;
`;
const Bar = styled.div<{ height: string; color: string }>`
  width: 3.75rem;
  height: ${(props) => props.height};
  border-radius: 2.5rem 2.5rem 0.625rem 0.625rem;
  background: ${(props) => props.color};
`;
const Ratio = styled.div`
  color: ${colors.grey4};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Legend = styled.div<{ weight: number }>`
  color: ${colors.grey4};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
`;
