import { useState } from "react";
import { SearchModalBox, SearchModalContent } from "../common/ModalStyle";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../common/ButtonStyle";
import { colors } from "@/styles/theme";
import { copyGuideData } from "@/lib/data";
import { AnimatePresence } from "framer-motion";

const CopyModal = (props: any) => {
  // 전달받은 state 함수
  const { clickModal } = props;

  return (
    <AnimatePresence>
      {/* 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에
      state함수를 넣는다. */}
      <SearchModalBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={clickModal}
      >
        <SearchModalContent
          width="50rem"
          height="32.875rem"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <ModalContent>
            <CloseButton onClick={clickModal}>
              <Image src="/main/Cross.svg" alt="close" width={30} height={30} />
            </CloseButton>
            <Title>광고 카피 이용가이드</Title>
            <CardBlock>
              {copyGuideData.map((v) => (
                <CardWrapper>
                  <CardTitle color={colors.white}>{v.index}</CardTitle>
                  <CardTitle color={colors.mainLight1}>{v.title}</CardTitle>
                  <CardDescription>{v.description}</CardDescription>
                </CardWrapper>
              ))}
            </CardBlock>
            <MiniText>
              * N카피는 네이버 HyperCLOVA 기반, K카피는 카카오브레인 KoGPT
              기반으로 구축한 AI 카피 생성 모델이에요.
            </MiniText>
          </ModalContent>
        </SearchModalContent>
      </SearchModalBox>
    </AnimatePresence>
  );
};

export default CopyModal;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3rem 0 5rem 0;
  justify-content: center;
  align-items: center;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 2.125rem;
  height: 2.125rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0px;
  border-radius: 6.25rem;
  background: #343434;
  cursor: pointer;
`;
const Title = styled.h1`
  color: #efefef;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3.75rem;
`;
const CardBlock = styled.div`
  display: inline-flex;
  gap: 0.63rem;
`;
const CardWrapper = styled.div`
  height: 16.25rem;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: rgba(255, 255, 255, 0.07);
`;
const CardTitle = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const CardDescription = styled.div`
  width: 10.75rem;
  color: ${colors.greyTypeMain};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  white-space: pre-line;
`;
const MiniText = styled.div`
  color: ${colors.grey1};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2.5rem;
`;
