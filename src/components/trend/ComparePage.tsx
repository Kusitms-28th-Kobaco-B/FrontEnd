"use client";

import styled from "styled-components";
import { LineChart } from "./LineChart";
import TrendSearch from "./PeopleSearch";
import { useState } from "react";
import TrendTop from "./TrendTop";
import ToggleButton from "../common/ToggleButton";
import CompareRadialChart from "./CompareRadialChart";
import CompareBarChart from "./CompareBarChart";
import Image from "next/image";
import { infoData, relatedContentCompareData } from "@/lib/trend/trendData";
import RelatedContents from "./RelatedContents";

const ComparePage = () => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <Layout>
      <TrendSearch
        title="비교"
        description="인물/키워드 간 비교를 통해 검색량 추이부터 공통 연관어 비교, 관련 콘텐츠까지 확인할 수 있어요."
        placeholder="예) 예금 vs 적금, 안유진 vs 동원참치 vs 조정석"
        src="/trend/compareAnalysis.png"
        setSearchName={setSearchWord}
      />

      {searchWord !== "" && (
        <>
          <TrendTop />
          <SearchText>
            <span>"{searchWord}"</span>에 대한 비교 분석 결과입니다.
          </SearchText>

          <ContentWrapper width="87.5rem">
            <TitleBox>
              <Title>검색량 추이</Title>
              <ToggleButton items={["일별", "월별", "주별"]} />
            </TitleBox>
            <LineChart />
          </ContentWrapper>

          <ContentWrapper width="87.5rem">
            <Title marginBottom="2.5rem">성별 검색 비중</Title>
            <ChartBox>
              <CompareRadialChart label="홈 인테리어" woman={56} man={44} />
              <CompareRadialChart label="샴푸" woman={30} man={70} />
            </ChartBox>
          </ContentWrapper>

          <ContentWrapper width="87.5rem">
            <Title marginBottom="2.5rem">연령별 검색 비중 TOP 3</Title>
            <ChartBox>
              <CompareBarChart
                label="홈 인테리어"
                color="#ED6171"
                infoData={infoData}
              />
              <CompareBarChart
                label="샴푸"
                color="#8796E9"
                infoData={infoData}
              />
            </ChartBox>
          </ContentWrapper>

          <ContentContainer width="87.5rem">
            <TitleBottomBox>
              <Title>연관어 비교</Title>
              <ImageBottomBox>
                <Image
                  src="/trend/commonWord.svg"
                  alt="연관어 비교"
                  width={10}
                  height={10}
                />
                공통 키워드
              </ImageBottomBox>
            </TitleBottomBox>
            <ImageBox>
              <Image
                src="/trend/relatedWordCompare.svg"
                alt="연관어 비교"
                width={1000}
                height={400}
              />
            </ImageBox>

            <Text>관련 콘텐츠</Text>
            <RelatedContents data={relatedContentCompareData} />
          </ContentContainer>
        </>
      )}
    </Layout>
  );
};

export default ComparePage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 200px;
  gap: 1.38rem;
`;
const SearchText = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin: 2rem 0;
  span {
    color: ${({ theme }) => theme.colors.mainLight1};
  }
`;
const ContentWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  padding: 2.25rem 2.5rem;
  border-radius: 1.875rem;
  background: #212121;
`;
const ContentContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  padding: 2.25rem 2.5rem;
  border-radius: 1.875rem;
  background: #212121;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const TitleBottomBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

const ImageBottomBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.div<{ marginBottom?: string }>`
  display: inline-flex;
  padding: 0.6875rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.0625rem;
  border-radius: 1.875rem;
  background: #383838;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: ${(props) => props.marginBottom};
  width: fit-content;
`;

const ChartBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin: 4rem 0 2rem 0;
`;
