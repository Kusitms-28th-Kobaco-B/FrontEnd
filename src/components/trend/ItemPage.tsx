"use client";

import styled from "styled-components";
import { LineChart } from "./LineChart";
import RadialChart from "./RadialChart";
import BarChart from "./BarChart";
import RelatedHashTag from "./RelatedHashTag";
import TrendSearch from "./PeopleSearch";
import { useState } from "react";
import TrendTop from "./TrendTop";
import ToggleButton from "../common/ToggleButton";
import RelatedRankChange from "./RelatedRankChange";
import RecentSearchBox from "./RecentSearchBox";
import { recentSearchData } from "@/lib/trend/trendData";
import ShoppingList from "./ShoppingList";
import Image from "next/image";

const ItemPage = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <Layout>
      <TrendSearchBox>
        <TrendSearch
          title="아이템"
          description="검색량과 연관어 추이, 네이버쇼핑 키워드를 통해 한 번에 분석할 수 있어요."
          placeholder="예) 홈 인테리어, 여행, 강아지"
          src="/trend/itemAnalysis.png"
          setSearchName={setSearchName}
        />
        <RecentSearchBox data={recentSearchData} />
      </TrendSearchBox>

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
              <Title marginBottom="1.88rem">연관어 순위 변화</Title>
              <RelatedRankChange />
            </ContentWrapper>
          </InlineContent>

          <ContentWrapper width="87.5rem">
            <Title marginBottom="2.5rem">관련 해시태그</Title>
            <RelatedHashTag />
          </ContentWrapper>

          <ContentWrapper width="87.5rem">
            <Title marginBottom="2.5rem">네이버 쇼핑 키워드</Title>
            <InlineContent>
              <Image
                src="/trend/shoppingKeyword.png"
                alt="keyword"
                width={652}
                height={449}
              />
              <ShoppingList />
            </InlineContent>
          </ContentWrapper>
        </>
      )}
    </Layout>
  );
};

export default ItemPage;

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
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: ${(props) => props.marginBottom};
`;

const InlineContent = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 1.56rem;
`;

const TrendSearchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
