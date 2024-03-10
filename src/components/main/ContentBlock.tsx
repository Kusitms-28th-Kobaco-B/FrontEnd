"use client";

import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface ContentBlockProps {
  title: string;
  description: string;
  card: Card[];
  isTrend: boolean;
}

interface Card {
  title: string;
  description: string;
  img: string;
  link: string;
}

export default function ContentBlock(props: ContentBlockProps) {
  const { title, description, card, isTrend } = props;

  const Variants = {
    default: {
      scale: 1,
    },
    scaleUp: {
      scale: 1.15,
      transition: {
        duration: 0.25,
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
    <Layout initial="offscreen" whileInView="onscreen" variants={Variants}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CardBlock>
        {card.map((v, i) =>
          v.link == "" ? (
            <CardWrapper
              key={i}
              initial="default"
              whileHover="scaleUp"
              variants={Variants}
              trend={isTrend}
            >
              <ImageWrapper>
                <Image
                  src={v.img}
                  alt={`card-image.${i}`}
                  width={336}
                  height={210}
                />
              </ImageWrapper>
              <CardTitle>{v.title}</CardTitle>
              <CardDescription>{v.description}</CardDescription>
            </CardWrapper>
          ) : (
            <Link href={v.link}>
              <CardWrapper
                key={i}
                initial="default"
                whileHover="scaleUp"
                variants={Variants}
                trend={isTrend}
              >
                <ImageWrapper>
                  <Image
                    src={v.img}
                    alt={`card-image.${i}`}
                    width={336}
                    height={210}
                  />
                </ImageWrapper>
                <CardTitle>{v.title}</CardTitle>
                <CardDescription>{v.description}</CardDescription>
              </CardWrapper>
            </Link>
          )
        )}
      </CardBlock>
    </Layout>
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
const CardBlock = styled.div`
  display: inline-flex;
  gap: 5rem;
  margin-top: 6.25rem;
`;
const CardWrapper = styled(motion.div)<{ trend: boolean }>`
  width: 21rem;
  height: 23.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid rgba(66, 66, 70, 0.6);
  background: ${(props) =>
    props.trend
      ? `linear-gradient(
      180deg,
      rgba(18, 18, 19, 0.3) 5.49%,
      rgba(129, 149, 255, 0.1) 25%,
      rgba(37, 37, 39, 0.06) 81.1%
    ),
    #262525`
      : `linear-gradient(
      180deg,
      rgba(18, 18, 19, 0.3) 5.49%,
      rgba(211, 59, 77, 0.1) 25%,
      rgba(37, 37, 39, 0.06) 81.1%
    ),
    #262525`};
  backdrop-filter: blur(2px);
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: transparent;
`;
const CardTitle = styled.div`
  width: 100%;
  color: ${colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 2rem;
`;
const CardDescription = styled.div`
  color: ${colors.greyTypeMain};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0 2rem;
`;
