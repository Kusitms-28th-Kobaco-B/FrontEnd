"use client";

import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../common/ButtonStyle";
import { CardSlider } from "./CardSlider";
import CopyModal from "./CopyModal";
import Link from "next/link";

export default function CopyBlock() {
  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState(false);
  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal = () => setShowModal(!showModal);

  const Variants = {
    default: {
      scale: 1,
    },
    scaleUp: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        delay: 0,
      },
    },
    offscreen: {
      y: +50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0,
      },
    },
  };

  return (
    <>
      <Layout initial="offscreen" whileInView="onscreen" variants={Variants}>
        <Title>광고 카피 제작</Title>
        <Description>
          {
            "상품/서비스 명과 키워드를 입력하면, AI가 자동으로 광고 카피 문구를 생성해줘요.\n타겟과 톤앤매너를 설정해 적절한 카피를 제작할 수 있어요."
          }
        </Description>
        <ButtonWrapper>
          <Link href="/adCopy/createAdCopy">
            <Button
              background={colors.main}
              text={colors.white}
              initial="default"
              whileHover="scaleUp"
              variants={Variants}
            >
              새 카피 만들기
            </Button>
          </Link>
          <Link href="/adCopy/copyGallery">
            <Button
              background={colors.mainLight6}
              text={colors.main}
              initial="default"
              whileHover="scaleUp"
              variants={Variants}
            >
              카피 갤러리
            </Button>
          </Link>
        </ButtonWrapper>
        <GuideMiniTextBlock onClick={clickModal}>
          이용 가이드 보러가기
        </GuideMiniTextBlock>
        {showModal && <CopyModal clickModal={clickModal} />}
        <CardSlider />
      </Layout>
    </>
  );
}
const Layout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16rem;
`;
const Title = styled.div`
  color: ${colors.white};
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.875rem;
  margin-bottom: 1.56rem;
`;
const Description = styled.div`
  color: ${colors.greyTypeMain};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  white-space: pre-line;
`;
const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
  margin-top: 2rem;
`;
const GuideMiniTextBlock = styled.div`
  color: ${colors.greyTypeMain};
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  z-index: 1;
  cursor: pointer;
`;
