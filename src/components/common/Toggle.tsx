import { ageENUM, ageOption, genderENUM, genderOption } from "@/lib/data";
import { colors } from "@/styles/theme";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

interface ValuesProps {
  service: string; // 서비스 선택: 헤드/바디
  projectName: string; // 프로젝트명
  productName: string; // 상품/서비스명
  targetGender: string; // 성별
  targetAge: string; // 연령대
  keyword: string[]; //키워드
  tone: string; // 톤앤매너
}
interface ToggleProps {
  optionData: string[];
  placeholder: string;
  currentValue: string;
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
  contents: string;
  values: ValuesProps;
  setValues: React.Dispatch<React.SetStateAction<ValuesProps>>;
}

export const Toggle: React.FC<ToggleProps> = ({
  optionData,
  placeholder,
  currentValue,
  setCurrentValue,
  contents,
  values,
  setValues,
}) => {
  //const [currentValue, setCurrentValue] = useState(placeholder);
  const [showOptions, setShowOptions] = useState(false);

  const handleFocus = (e: any) => {
    setShowOptions(true);
  };

  const handleBlur = (e: any) => {
    setShowOptions(false);
  };

  const handleOnChangeSelectGender = (e: any) => {
    setCurrentValue(e.target.getAttribute("value"));
    setShowOptions(false);
    setValues({
      ...values,
      [contents]:
        genderENUM[genderOption.indexOf(e.target.getAttribute("value"))],
    });
  };
  const handleOnChangeSelectAge = (e: any) => {
    setCurrentValue(e.target.getAttribute("value"));
    setShowOptions(false);
    setValues({
      ...values,
      [contents]: ageENUM[ageOption.indexOf(e.target.getAttribute("value"))],
    });
  };

  return (
    <SelectBox
      tabIndex={0}
      show={showOptions}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <Label notFocus={currentValue == placeholder}>
        {currentValue}
        <Image
          src={showOptions ? "/adCopy/arrow-up.svg" : "/adCopy/arrow-down.svg"}
          alt="arrow-down"
          width={18}
          height={18}
          style={{ float: "right" }}
        />
      </Label>
      <SelectOptions show={showOptions} optionData={optionData}>
        {optionData.map((v, i) => (
          <Option
            key={i}
            value={v}
            onClick={
              contents == "targetGender"
                ? handleOnChangeSelectGender
                : handleOnChangeSelectAge
            }
          >
            {v}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

const SelectBox = styled.div<{ show: boolean }>`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 50%;
  height: 3.125rem;
  padding: 0 2rem;
  align-items: center;
  border-radius: 6.25rem;
  background-color: ${colors.grey0};
  align-self: center;
  border: 1px solid ${(props) => (props.show ? colors.main : colors.grey0)};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const Label = styled.label<{ notFocus: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.notFocus ? colors.grey1 : colors.white)};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
`;
const SelectOptions = styled.ul<{ show: boolean; optionData: string[] }>`
  position: absolute;
  list-style: none;
  top: 3.625rem;
  left: 0;
  width: 100%;
  height: ${(props) => (props.optionData.length > 3 ? "11.25rem" : "")};
  overflow-y: auto;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: ${(props) => (props.show ? "1rem 0" : "0")};
  border-radius: 1.3125rem;
  background-color: ${colors.grey0};
  color: ${colors.white};
  box-shadow: 0px 0px 16px 0px rgba(26, 26, 26, 0.4);
`;
const Option = styled.li`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0.5rem 2rem;
  &:hover {
    background-color: ${colors.main};
  }
`;
