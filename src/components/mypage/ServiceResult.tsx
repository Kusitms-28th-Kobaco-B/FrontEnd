"use client";

import styled from "styled-components";
import { colors } from "@/styles/theme";
import { useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { serviceData } from "@/lib/user/userData";
import Service from "./Service";

const ServiceResult = () => {
  const size = useWindowSize();
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <BoxWrapper>
      {categoryIndex == 0 ? (
        <BoxContents style={{ height: size.height * 0.65 }}>
          {serviceData.map((data) => (
            <Service
              key={data.id}
              button1={data.button1}
              button2={data.button2}
              content={data.content}
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
