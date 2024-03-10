"use client";

import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { itemTrendState, peopleTrendState } from "@/context/recentSearch";

interface TrendPeopleSearchProps {
  title: string;
  description: string;
  placeholder: string;
  src: string;
  setSearchName: (name: string) => void;
}

const TrendSearch = (props: TrendPeopleSearchProps) => {
  const [name, setName] = useState("");
  const { title, description, placeholder, src, setSearchName } = props;

  const [peopleTrend, setPeopleTrend] = useRecoilState(peopleTrendState);
  const [itemTrend, setItemTrend] = useRecoilState(itemTrendState);

  useEffect(() => {
    if (peopleTrend.length > 4) {
      setPeopleTrend((prev: string[]) => prev.slice(1));
    }
    if (itemTrend.length > 4) {
      setItemTrend((prev: string[]) => prev.slice(1));
    }
  }, [peopleTrend, itemTrend]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.nativeEvent.isComposing === false && name !== "") {
      setSearchName(name);
      if (title === "인물") {
        setPeopleTrend((prev: string[]) => {
          const updatedTrend = [name, ...prev];
          if (updatedTrend.length > 4) {
            return updatedTrend.slice(0, 4);
          }
          return updatedTrend;
        });
      } else if (title === "아이템") {
        setItemTrend((prev: string[]) => {
          const updatedTrend = [name, ...prev];
          if (updatedTrend.length > 4) {
            return updatedTrend.slice(0, 4);
          }
          return updatedTrend;
        });
      }
      setName("");
    }
  };

  return (
    <Layout>
      <SubTitle>트렌드 분석</SubTitle>
      <ImageBox>
        <Image src={src} alt="peopleAnalysis" width={200} height={200} />
      </ImageBox>
      <Title>{title} 분석</Title>

      <Description>{description}</Description>

      <SearchBarBox>
        <SearchImage>
          <Image src="/common/search.svg" alt="search" width={20} height={20} />
        </SearchImage>
        <SearchBar
          placeholder={placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </SearchBarBox>
    </Layout>
  );
};

export default TrendSearch;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: #b4b4b4;
  transform: translateY(5rem);
`;

const ImageBox = styled.div`
  transform: translateY(3rem);
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.div`
  font-size: 1rem;
  margin: 1.5rem 0 4rem 0;
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
  top: 1.1rem;
`;

const SearchBar = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 100%;
  background: #313131;
  padding: 1.2rem 5rem;
  outline: none;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;
