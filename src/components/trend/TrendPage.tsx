"use client";

import styled from "styled-components";
import { LineChart } from "./LineChart";
import { colors } from "@/styles/theme";
import RadialChart from "./RadialChart";
import BarChart from "./BarChart";
import BrandReputationIndex from "./BrandReputationIndex";
import RelatedHashTag from "./RelatedHashTag";
import TrendSearch from "./TrendSearch";
import RelatedContents from "./RelatedContents";
import { useState } from "react";
import TrendTop from "./TrendTop";
import ToggleButton from "../common/ToggleButton";
import { relatedContentData } from "@/lib/trend/trendData";

const TrendPage = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <Layout>
      <TrendSearch
        title="인물"
        description="검색량과 연관어 추이, 브랜드 평판 지수를 통해 인물에 대한 정보를 한 번에
        확인할 수 있어요."
        placeholder="예) 유재석, 라이즈, 최민식"
        src="/trend/peopleAnalysis.png"
        setSearchName={setSearchName}
      />

      {searchName !== "" && (
        <>
          <TrendTop />
          <SearchText>
            <span>"{searchName}"</span>에 대한 인물 분석 결과입니다.
          </SearchText>

          <ContentWrapper width="87.5rem">
            <TitleBox>
              <Title>검색량 추이</Title>
              <ToggleButton items={["일별", "월별", "주별"]} />
            </TitleBox>
            <LineChart />
          </ContentWrapper>

          <InlineContent>
            <ContentWrapper width="28.125rem">
              <Title marginBottom="1.88rem">성별 검색 비중</Title>
              <RadialChart />
            </ContentWrapper>
            <ContentWrapper width="28.125rem">
              <Title marginBottom="1.88rem">연령별 검색 비중 TOP 3</Title>
              <BarChart />
            </ContentWrapper>
            <ContentWrapper width="28.125rem">
              <Title marginBottom="1.88rem">브랜드 평판 지수</Title>
              <BrandReputationIndex />
            </ContentWrapper>
          </InlineContent>

          <ContentWrapper width="87.5rem">
            <Title marginBottom="2.5rem">관련 해시태그</Title>
            <RelatedHashTag />
          </ContentWrapper>

          <ContentWrapper width="87.5rem">
            <TitleBox>
              <Title>관련 콘텐츠</Title>
              <ToggleButton items={["최신순", "인기순"]} />
            </TitleBox>
            <RelatedContents data={relatedContentData} />
            <PlusButtonBox>
              <Title>더보기</Title>
            </PlusButtonBox>
          </ContentWrapper>
        </>
      )}
    </Layout>
  );
};

export default TrendPage;

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

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.div<{ marginBottom?: string }>`
  display: inline-flex;
  padding: 0.6875rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.0625rem;
  border-radius: 1.875rem;
  background: #383838;
  color: ${colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: ${(props) => props.marginBottom};
`;

const InlineContent = styled.div`
  display: inline-flex;
  gap: 1.56rem;
  //   gap: 5rem;
  //   justify-content: center;
  //   align-items: center;
  //   width: 90%;
  //   height: 100%;
  //   margin: 6rem auto 0 auto; // 임시로
`;

const PlusButtonBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  > div {
    background: #252525;
    color: #b4b4b4;
  }
`;
