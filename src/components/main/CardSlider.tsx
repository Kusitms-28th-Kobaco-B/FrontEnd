import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import styled from "styled-components";
import { colors } from "@/styles/theme";

export const CardSlider = () => {
  return (
    <SwiperBlock
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      slidesPerGroup={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 0.7,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <CardRegion>
          <CardWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                기본형
              </Tag>
            </TagWrapper>
            <CardContents>
              ‘내가 사는 지역을 더 살기 좋게, 더 매력 있게’
            </CardContents>
          </CardWrapper>
          <CardInfoBlock>
            <CardInfo>김서윤 | 2024.09.07</CardInfo>
            <CardInfo>조회 1900</CardInfo>
          </CardInfoBlock>
        </CardRegion>
      </SwiperSlide>
      <SwiperSlide>
        <CardRegion>
          <CardWrapper>
            <TagWrapper>
              <Tag color={colors.secondary} background={colors.secondaryLight3}>
                바디카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                행동촉구형
              </Tag>
            </TagWrapper>
            <CardContents>
              {`‘새학기 새출발엔 역시 가구지!
                책상부터 의자까지 한번에 해결할 수 있는 패키지 상품 출시!
                봄맞이 특별 할인가로 만나보세요!’`}
            </CardContents>
          </CardWrapper>
          <CardInfoBlock>
            <CardInfo>김예찬 | 2024.09.07</CardInfo>
            <CardInfo>조회 1900</CardInfo>
          </CardInfoBlock>
        </CardRegion>
      </SwiperSlide>
      <SwiperSlide>
        <CardRegion>
          <CardWrapper>
            <TagWrapper>
              <Tag color={colors.main} background={colors.mainLight6}>
                헤드카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                언어유희형
              </Tag>
            </TagWrapper>
            <CardContents>
              {`‘내 방에서 만나는 예술 작품, 내 꿈과 미래를 그리는 공간,
                멋진 가구 하나면 충분하다.’`}
            </CardContents>
          </CardWrapper>
          <CardInfoBlock>
            <CardInfo>박예진 | 2024.09.07</CardInfo>
            <CardInfo>조회 1200</CardInfo>
          </CardInfoBlock>
        </CardRegion>
      </SwiperSlide>
      <SwiperSlide>
        <CardRegion>
          <CardWrapper>
            <TagWrapper>
              <Tag color={colors.secondary} background={colors.secondaryLight3}>
                바디카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                행동촉구형
              </Tag>
            </TagWrapper>
            <CardContents>
              {`‘오늘 저녁은 치킨이다! 바삭한 튀김옷과\n단짠단짠 간장소스의 환상적인 조합’`}
            </CardContents>
          </CardWrapper>
          <CardInfoBlock>
            <CardInfo>백건우 | 2024.09.07</CardInfo>
            <CardInfo>조회 2100</CardInfo>
          </CardInfoBlock>
        </CardRegion>
      </SwiperSlide>
      <SwiperSlide>
        <CardRegion>
          <CardWrapper>
            <TagWrapper>
              <Tag color={colors.secondary} background={colors.secondaryLight3}>
                바디카피
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                기본형
              </Tag>
            </TagWrapper>
            <CardContents>
              {`‘아이들 학습 수준에 맞춰 개별 맞춤 수업이 가능해요.\n체계적인 관리를 통해 성적 향상도 쑥쑥!’`}
            </CardContents>
          </CardWrapper>
          <CardInfoBlock>
            <CardInfo>유해령 | 2024.09.07</CardInfo>
            <CardInfo>조회 600</CardInfo>
          </CardInfoBlock>
        </CardRegion>
      </SwiperSlide>
    </SwiperBlock>
  );
};

const SwiperBlock = styled(Swiper)`
  margin-top: 3.75rem;
`;
const CardRegion = styled.div`
  display: flex;
  width: 31.25rem;
  flex-direction: column;
  gap: 1.38rem;
`;
const CardWrapper = styled.div`
  display: flex;
  width: 31.25rem;
  height: 16.25rem;
  padding: 4.375rem 1.25rem 3.8125rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.0625rem;
  flex-shrink: 0;
  border-radius: 0.875rem;
  border: 1px solid rgba(222, 222, 222, 0.2);
  background: linear-gradient(
    185deg,
    #1e1e1e -12.22%,
    #2d2d2d 51.81%,
    #1c1c1c 103.86%
  );
`;
const CategoryButton = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.375rem;
  border: 1px solid ${colors.greyTypeMain};

  color: ${colors.greyTypeMain};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardContents = styled.div`
  white-space: pre-line;
  color: var(--Basic-White, #fff);
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 166.667% */
`;
const CardInfoBlock = styled.div`
  display: inline-flex;
  padding: 0 1rem;
  justify-content: space-between;
`;
const CardInfo = styled.div`
  color: ${colors.greyTypeMain};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const TagWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: inline-flex;
  gap: 0.5rem;
`;
const Tag = styled.div<{ color: string; background: string }>`
  padding: 0.375rem 0.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.375rem;
  border: 1px solid ${(props) => props.color};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
