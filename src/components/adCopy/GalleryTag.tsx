"use client";

import { colors } from "@/styles/theme";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const GalleryTag = () => {
  const [date, setDate] = useState<number>(0);
  const [service, setService] = useState<string>("");
  const [tone, setTone] = useState<number>(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <TagRegion>
      <InlineContents>
        <Title>날짜</Title>
        <TagWrapper active={date == 1} onClick={() => setDate(1)}>
          최근 1주일
        </TagWrapper>
        <TagWrapper active={date == 2} onClick={() => setDate(2)}>
          최근 한달
        </TagWrapper>
        <TagWrapper active={date == 3} onClick={() => setDate(3)}>
          최근 6개월
        </TagWrapper>
        <DateBox active={date == 4} onClick={() => setDate(4)}>
          <div className="title">직접 입력</div>
          <DateContainer>
            <Image
              src="/trend/calendar.svg"
              alt="calendar"
              width={24}
              height={24}
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
              width={24}
              height={24}
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
      </InlineContents>
      <InlineContents>
        <Title>서비스 구분</Title>
        <TagWrapper
          active={service == "HEAD"}
          onClick={() => setService("HEAD")}
        >
          헤드카피
        </TagWrapper>
        <TagWrapper
          active={service == "BODY"}
          onClick={() => setService("BODY")}
        >
          바디카피
        </TagWrapper>
      </InlineContents>
      <InlineContents>
        <Title>톤앤 매너</Title>
        <TagWrapper active={tone == 1} onClick={() => setTone(1)}>
          기본형
        </TagWrapper>
        <TagWrapper active={tone == 2} onClick={() => setTone(2)}>
          언어유희형
        </TagWrapper>
        <TagWrapper active={tone == 3} onClick={() => setTone(3)}>
          행동촉구형
        </TagWrapper>
        <TagWrapper active={tone == 4} onClick={() => setTone(4)}>
          리뷰형
        </TagWrapper>
        <TagWrapper active={tone == 5} onClick={() => setTone(5)}>
          경고형
        </TagWrapper>
        <TagWrapper active={tone == 6} onClick={() => setTone(6)}>
          감정호소형
        </TagWrapper>
        <TagWrapper active={tone == 7} onClick={() => setTone(7)}>
          문제제기형
        </TagWrapper>
        <TagWrapper active={tone == 8} onClick={() => setTone(8)}>
          질문형
        </TagWrapper>
      </InlineContents>
    </TagRegion>
  );
};

export default GalleryTag;

const TagRegion = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.5rem;
  height: 17.75rem;
  flex-shrink: 0;
  padding: 3.5rem 5rem;
  border-radius: 1.25rem;
  background: #212121;
  gap: 2rem;
  color: ${colors.grey1};
  margin-bottom: 3.75rem;
`;
const InlineContents = styled.div`
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
`;
const Title = styled.div`
  width: 6rem;
  color: ${colors.white};
`;
const TagWrapper = styled.div<{
  active: boolean;
}>`
  display: flex;
  flex-grow: 0;
  padding: 0.62rem 1.75rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.825rem;
  border: 1px solid ${(props) => (props.active ? colors.main : colors.grey05)};
  background: ${(props) => (props.active ? "#212121" : "transparent")};
  color: ${(props) => (props.active ? colors.main : colors.grey1)};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
const DateBox = styled.div<{ active: boolean }>`
  display: flex;
  height: 2.5rem;
  justify-content: space-between;
  align-items: center;
  background: #212121;
  border: 1px solid ${(props) => (props.active ? colors.main : colors.grey05)};
  padding: 0.62rem 1.75rem;
  border-radius: 1.875rem;
  .title {
    margin-right: 1.5rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
    color: ${(props) => (props.active ? colors.main : colors.grey1)};
  }
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  > div {
    margin: 0 0.1rem 0 0.5rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
`;

const DatePickerStyle = styled(DatePicker)`
  background-color: #212121;
  padding: 1rem 2.5rem;
  border-radius: 100px;
  color: ${colors.grey1};
  cursor: pointer;
  border: none;
  padding: 0;
  width: 5.5rem;
  &:focus {
    outline: none;
  }
`;
