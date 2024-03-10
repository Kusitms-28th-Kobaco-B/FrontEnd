"use client";

import styled from "styled-components";
import { colors } from "@/styles/theme";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { serviceData } from "@/lib/user/userData";
import Service from "./Service";
import { recentSavedCopy } from "@/lib/action";
import { toneENUM, toneOption } from "@/lib/data";

interface CopyItem {
  advertisementCopyId: number;
  service: string;
  tone: string;
  message: string;
  views: number;
}

const ServiceResult = () => {
  const size = useWindowSize();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [copy, setCopy] = useState<CopyItem[]>([]);

  useEffect(() => {
    recentSavedCopy().then((result) => {
      setCopy(result);
    });
  }, []);

  return (
    <BoxWrapper>
      {categoryIndex == 0 ? (
        <BoxContents style={{ height: size.height * 0.65 }}>
          {copy.map((data) => (
            <Service
              key={data.advertisementCopyId}
              button1={data.service == "HEAD" ? "헤드카피" : "바디카피"}
              button2={toneOption[toneENUM.indexOf(data.tone)]}
              content={data.message}
            />
          ))}
        </BoxContents>
      ) : (
        <></>
      )}
    </BoxWrapper>
  );
};

export default ServiceResult;

const BoxWrapper = styled.div`
  width: 60%;
  padding-left: 1.38rem;
`;
const BoxContents = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: space-between;
  align-content: flex-start;
  padding-right: 0.875rem;

  &::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 10px;
    background-color: ${colors.grey0};
  }
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.main};
  }
`;
