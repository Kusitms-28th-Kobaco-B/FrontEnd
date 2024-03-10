"use client";

import styled from "styled-components";
import Image from "next/image";
import { recentSearchData } from "@/lib/trend/trendData";
import { useState } from "react";
import RecentSearchContent from "../trend/RecentSearchContent";
import { colors } from "@/styles/theme";

interface AdCopySearchProps {
  setSearchName: (name: string) => void;
}

const AdCopySearch = (props: AdCopySearchProps) => {
  const [name, setName] = useState("");
  const { setSearchName } = props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.nativeEvent.isComposing === false) {
      setSearchName(name);
      setName("");
    }
  };

  return (
    <Layout>
      <SubTitle>광고 카피 제작</SubTitle>
      <Title>카피 갤러리</Title>
      <SearchBarBox>
        <SearchImage>
          <Image src="/common/search.svg" alt="search" width={20} height={20} />
        </SearchImage>
        <SearchBar
          placeholder="키워드 검색하기"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </SearchBarBox>

      <RecentSearchBox>
        {recentSearchData.map((recentSearch) => (
          <RecentSearchContent key={recentSearch.id} name={recentSearch.name} />
        ))}
      </RecentSearchBox>
    </Layout>
  );
};

export default AdCopySearch;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding-bottom: 3.75rem;
`;

const SubTitle = styled.div`
  color: #b4b4b4;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.25rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${colors.white};
  margin-bottom: 3.75rem;
`;

const SearchBarBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const SearchImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 2.5rem;
  top: 1.4rem;
`;

const SearchBar = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 100%;
  background: #313131;
  padding: 1.5rem 5rem;
  outline: none;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;

const RecentSearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  margin: 1.5rem 0 0 2rem;
`;
