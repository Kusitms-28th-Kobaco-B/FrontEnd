"use client";

import { useState } from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import ToggleButton from "../common/ToggleButton";

const TrendTop = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Layout>
      <ToggleButton items={["최근 1주일", "최근 1개월", "최근 6개월"]} />

      <DateBox>
        <DateContainer>직접 입력</DateContainer>
        <DateContainer>
          <Image
            src="/trend/calendar.svg"
            alt="calendar"
            width={20}
            height={20}
          />
          <div>시작일</div>
          <DatePickerStyle
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy-MM-dd"
          />
        </DateContainer>
        <DateContainer>
          <Image
            src="/trend/calendar.svg"
            alt="calendar"
            width={20}
            height={20}
          />
          <div>종료일</div>
          <DatePickerStyle
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy-MM-dd"
          />
        </DateContainer>
      </DateBox>
    </Layout>
  );
};

export default TrendTop;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 77.5rem;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background: #262626;
  padding: 1rem 2.5rem;
  border-radius: 100px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > div {
    margin: 0 0.1rem 0 0.5rem;
  }
`;

const DatePickerStyle = styled(DatePicker)`
  background: #262626;
  padding: 1rem 2.5rem;
  border-radius: 100px;
  color: #b4b4b4;
  cursor: pointer;
  border: none;
  padding: 0;
  width: 5.5rem;
  color: ${({ theme }) => theme.colors.mainLight2};
  &:focus {
    outline: none;
  }
  font-size: 1rem;
`;
