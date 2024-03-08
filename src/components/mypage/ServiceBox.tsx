"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { colors } from "@/styles/theme";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Toggle } from "../common/Toggle";
import Image from "next/image";

const genderOption = ["전체", "남성", "여성"];
const ageOption = [
  "전체",
  "0~9세",
  "10~19세",
  "20~29세",
  "30~39세",
  "40~49세",
  "50~59세",
  "60~69세",
  "70세 이상",
];

const ServiceBox = () => {
  const size = useWindowSize();

  // 백엔드에 보낼 데이터 (Form submit 용)
  const [values, setValues] = useState({
    category: "", // 서비스 선택: 헤드/바디
    projectName: "", // 프로젝트명
    serviceName: "", // 상품/서비스명
    targetGender: "", // 성별
    targetAge: "", // 연령대
    keyword: "", //키워드
    toneManner: "", // 톤앤매너
  });
  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // 생성 버튼 disabled 인지 아닌지
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    const isFull = Object.values(values).every((value) => value.trim() !== "");
    setCanSubmit(isFull);
  }, [values]);

  const [focused, setFocused] = useState("");
  // 포커스 상태 변경 함수
  const handleFocus = (name: string) => {
    setFocused(name);
  };
  // 포커스 해제 함수
  const handleBlur = () => {
    setFocused("");
  };

  // 헤드카피, 바디카피
  const [category, setCategory] = useState("");
  const categoryClick = (opt: string) => {
    category === opt ? setCategory("") : setCategory(opt);
  };

  // 키워드
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  // 키워드 input이 변경될 때마다 업데이트
  const keywordChange = (e: any) => {
    setInputValue(e.target.value);
  };
  // 엔터를 누르면 키워드 배열에 값 추가 & input 초기화
  // e.nativeEvent.isComposing == false: onKeyDown 한글 오류 해결
  const keywordEnter = (e: any) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      setKeywords((prevKeywords) => [...prevKeywords, inputValue]);
      setInputValue("");
    }
  };
  // 키워드 배열에서 삭제
  const removeKeyword = (indexToRemove: number) => {
    setKeywords((prevKeywords) =>
      prevKeywords.filter((_, index) => index !== indexToRemove)
    );
  };

  // 톤앤매너
  const [toneManner, setToneManner] = useState<number>(0);

  return (
    <BoxWrapper style={{ height: size.height * 0.8 }}>
      <BoxHead>
        <InlineContent gap="0">
          <TitleBox color={colors.white} border={colors.main}>
            N카피
          </TitleBox>
          <TitleBox color={colors.grey1} border={colors.grey1}>
            K카피
          </TitleBox>
        </InlineContent>
        N카피는 네이버 HyperCLOVA를 연계해 구축한 AI 카피 생성 서비스예요
      </BoxHead>
      <BoxContent id="createCopy">
        <Contents focus={""} opt={"none"}>
          서비스 선택
          <InlineContent gap="1rem">
            <SelectButton
              active={category == "head"}
              color={colors.main}
              background={colors.mainLight6}
              onClick={() => categoryClick("head")}
            >
              헤드 카피
            </SelectButton>
            <SelectButton
              active={category == "body"}
              color={colors.secondary}
              background={colors.secondaryLight3}
              onClick={() => categoryClick("body")}
            >
              바디 카피
            </SelectButton>
          </InlineContent>
        </Contents>
        <Contents focus={focused} opt={"projectName"}>
          프로젝트명
          <InputContent
            //required
            type="text"
            name="projectName"
            placeholder="예) SNS 광고"
            onFocus={() => handleFocus("projectName")}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </Contents>
        <Contents focus={focused} opt={"serviceName"}>
          상품/서비스 명
          <InputContent
            //required
            type="text"
            name="serviceName"
            placeholder="예) 아이스크림"
            onFocus={() => handleFocus("serviceName")}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </Contents>
        <Contents focus={""} opt={"target"}>
          타겟
          <InlineContent gap="1rem">
            <Toggle optionData={genderOption} placeholder="성별 선택" />
            <Toggle optionData={ageOption} placeholder="연령대 선택" />
          </InlineContent>
        </Contents>
        <Contents focus={focused} opt={"keyword"}>
          키워드
          <InputContent
            //required
            type="text"
            name="keyword"
            placeholder="예) 저당, 동물성크림"
            onFocus={() => handleFocus("keyword")}
            onBlur={handleBlur}
            onChange={keywordChange}
            onKeyDown={keywordEnter}
            value={inputValue}
            autoComplete="off"
          />
          <KeywordRegion>
            {keywords.map((keyword, index) => (
              <Keyword key={index}>
                {keyword}
                <Image
                  src="/main/Cross.svg"
                  alt="close"
                  width={22}
                  height={22}
                  onClick={() => removeKeyword(index)}
                />
              </Keyword>
            ))}
          </KeywordRegion>
        </Contents>
        <Contents focus={""} opt={"none"}>
          톤 앤 매너
          <ToneRegion>
            <InlineContent gap="0.5rem">
              <ToneButton
                active={toneManner == 1}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(1)}
              >
                기본형
              </ToneButton>
              <ToneButton
                active={toneManner == 2}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(2)}
              >
                언어유희형
              </ToneButton>
              <ToneButton
                active={toneManner == 3}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(3)}
              >
                행동촉구형
              </ToneButton>
              <ToneButton
                active={toneManner == 4}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(4)}
              >
                리뷰형
              </ToneButton>
            </InlineContent>
            <InlineContent gap="0.5rem">
              <ToneButton
                active={toneManner == 5}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(5)}
              >
                경고형
              </ToneButton>
              <ToneButton
                active={toneManner == 6}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(6)}
              >
                감정호소형
              </ToneButton>
              <ToneButton
                active={toneManner == 7}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(7)}
              >
                문제제기형
              </ToneButton>
              <ToneButton
                active={toneManner == 8}
                color={colors.main}
                background="#212121"
                onClick={() => setToneManner(8)}
              >
                질문형
              </ToneButton>
            </InlineContent>
          </ToneRegion>
        </Contents>
      </BoxContent>
      <SubmitButton disabled={!canSubmit} type="submit" form="createCopy">
        광고카피생성
      </SubmitButton>
    </BoxWrapper>
  );
};

export default ServiceBox;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  flex-shrink: 0;
  border-radius: 0.875rem;
  background: #212121;
  padding: 1.88rem 2.5rem;
  align-items: center;
`;
const BoxHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.grey05};
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  margin-bottom: 1rem;
`;
const InlineContent = styled.div<{ gap: string }>`
  display: flex;
  flex-grow: 1;
  gap: ${(props) => props.gap};
`;
const TitleBox = styled.div<{ color: string; border: string }>`
  display: flex;
  width: 9.625rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-bottom: 2px solid ${(props) => props.border};
  color: ${(props) => props.color};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  gap: 1.5rem;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
const Contents = styled.div<{ focus: string; opt: string }>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  gap: 1rem;
  color: ${(props) => (props.focus === props.opt ? colors.main : colors.white)};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SelectButton = styled.button<{
  active: boolean;
  color: string;
  background: string;
}>`
  display: flex;
  flex-grow: 1;
  height: 3.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6.25rem;
  border: 1px solid ${(props) => (props.active ? props.color : colors.grey0)};
  background: ${(props) => (props.active ? props.background : colors.grey0)};
  color: ${(props) => (props.active ? props.color : colors.grey1)};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
const InputContent = styled.input`
  display: flex;
  width: 100%;
  height: 3.125rem;
  padding-left: 2rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6.25rem;
  color: ${colors.white};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid ${colors.grey0};
  background: ${colors.grey0};
  &:focus {
    outline: none;
    border: 1px solid ${colors.main};
  }
`;
const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  padding: 0.75rem 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 2.1875rem;
  border: none;
  color: ${(props) => (props.disabled ? colors.grey05 : colors.white)};
  background: ${(props) => (props.disabled ? "#393939" : colors.main)};
  margin-top: 1.88rem;
`;
const KeywordRegion = styled.ul`
  width: 100%;
  color: ${colors.grey4};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 0.94rem;
`;
const Keyword = styled.li`
  display: inline-flex;
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.1875rem;
  border-radius: 6.25rem;
  background: ${colors.grey0};
  margin-right: 0.5rem;
`;
const ToneButton = styled.button<{
  active: boolean;
  color: string;
  background: string;
}>`
  display: flex;
  flex-grow: 1;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.825rem;
  border: 1px solid ${(props) => (props.active ? props.color : colors.grey1)};
  background: ${(props) => (props.active ? props.background : "transparent")};
  color: ${(props) => (props.active ? props.color : colors.grey1)};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:focus {
    outline-color: ${colors.main};
    outline-offset: 0;
    outline-width: 1px;
    outline-style: solid;
    border-color: transparent;
  }
`;
const ToneRegion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.125rem;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;