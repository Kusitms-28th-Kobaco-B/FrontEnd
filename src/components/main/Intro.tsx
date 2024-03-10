"use client";

import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "../common/ButtonStyle";
import { useState } from "react";
import IntroModal from "./IntroModal";
import VideoModal from "../common/VideoModal";
import { guideKey } from "@/constants/videoKey";

export default function Intro() {
  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState(false);
  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal = () => setShowModal(!showModal);

  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal2, setShowModal2] = useState(false);
  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal2 = () => setShowModal2(!showModal2);

  const Variants = {
    offscreen: {
      y: +50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1,
      },
    },
    default: {
      scale: 1,
    },
    scaleUp: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        delay: 0,
      },
    },
  };

  return (
    <Layout>
      <IconBack>
        <Icon1
          src={"/main/intro1.png"}
          alt="bg-icon-1"
          width={182}
          height={214}
        />
        <Icon2
          src={"/main/intro2.png"}
          alt="bg-icon-2"
          width={148}
          height={117}
        />
        <Icon3
          src={"/main/intro3.png"}
          alt="bg-icon-3"
          width={335}
          height={300}
        />
        <Icon4
          src={"/main/intro4.png"}
          alt="bg-icon-4"
          width={227}
          height={213}
        />
        <Icon5
          src={"/main/intro5.png"}
          alt="bg-icon-5"
          width={146}
          height={116}
        />
        <Icon6
          src={"/main/intro6.png"}
          alt="bg-icon-6"
          width={182}
          height={214}
        />
      </IconBack>
      <Contents initial="offscreen" whileInView="onscreen" variants={Variants}>
        <ButtonWrapper>
          <ButtonBlock>AI analysis System for AD Creation</ButtonBlock>
        </ButtonWrapper>
        <IntroTextBlock>
          어려웠던 광고제작,
          <TitleGradient>AI 기반 광고 창작 지원서비스</TitleGradient>
          <Title>AiSAC</Title>이 도와드려요 !
        </IntroTextBlock>
        <LinkButtonWrapper
          background={colors.main}
          text={colors.white}
          initial="default"
          whileHover="scaleUp"
          variants={Variants}
          onClick={clickModal2}
        >
          아이작 소개 영상 바로가기
          <Image
            src={"/main/arrow-right.svg"}
            alt="right-arrow"
            width={18}
            height={18}
          />
        </LinkButtonWrapper>
        {showModal2 && (
          <VideoModal
            title="아이작 소개 영상"
            clickModal={clickModal2}
            videoKey={guideKey}
          />
        )}
        <IntroMiniTextBlock onClick={clickModal}>
          광고 제작이 처음이신가요?
        </IntroMiniTextBlock>
        {showModal && <IntroModal clickModal={clickModal} />}
      </Contents>
    </Layout>
  );
}

const Layout = styled.div`
  margin-top: 132px;
  margin-bottom: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const IconBack = styled.div`
  position: absolute;
  width: 100%;
  height: 40rem;
  padding: 0;
`;
const Icon1 = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
`;
const Icon2 = styled(Image)`
  position: absolute;
  left: 25%;
  top: 0;
`;
const Icon3 = styled(Image)`
  position: absolute;
  right: 3%;
  top: -20%;
`;
const Icon4 = styled(Image)`
  position: absolute;
  left: 10%;
  bottom: 0%;
`;
const Icon5 = styled(Image)`
  position: absolute;
  right: 20%;
  bottom: 30%;
`;
const Icon6 = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const Contents = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(main/introBg.png);
  background-size: contain;
  width: 77.125rem;
  height: 37.825rem;
`;
const ButtonWrapper = styled.div`
  height: 2.875rem;
  background: linear-gradient(0.25turn, #8e444d, #cfc0c1, #985f65);
  padding: 1px;
  border-radius: 2.1875rem;
  margin-bottom: 3.5rem;
`;
const ButtonBlock = styled.div`
  display: inline-flex;
  height: 100%;
  width: 100%;
  padding: 0.75rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 2.1875rem;
  background-color: #1a1a1a;
  // text style 적용 필요
  color: #cecece;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IntroTextBlock = styled.div`
  color: ${colors.white};
  text-align: center;
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 5.375rem;
`;
const TitleGradient = styled.div`
  background: linear-gradient(90deg, #ffe8eb -10.66%, #f88e9a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 5.375rem;
`;
const Title = styled.span`
  color: #d03b4d;
  font-size: 3.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5.375rem;
`;
const IntroMiniTextBlock = styled.div`
  color: ${colors.greyTypeMain};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  z-index: 1;
  cursor: pointer;
`;
const LinkButtonWrapper = styled(Button)`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 3.75rem 0;
  z-index: 1;
  padding: 1rem 2.5rem;
`;
