import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { rankData } from "@/lib/trend/trendData";

const RelatedRankChange = () => {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);

  return (
    <>
      <Label>2월 3주차</Label>
      <SwiperContainer>
        <Swiper
          loop={true} // 슬라이드 루프
          spaceBetween={50} // 슬라이스 사이 간격
          slidesPerView={1} // 보여질 슬라이스 수
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          /* pagination={{
            clickable: true,
            type: "bullets",
            dynamicBullets: true,
          </SwiperContainer>}} */
        >
          {rankData.map((data, index) => (
            <SwiperSlide key={index}>
              <SlideBox>
                {data.map((item, index) => (
                  <Slide key={index}>
                    <Id>{item.id}</Id>
                    <Title>{item.title}</Title>
                    <Count updown={item.updown}>
                      {item.updown ? (
                        <Image
                          src="/trend/upArrow.svg"
                          alt="upArrow"
                          width={14}
                          height={14}
                        />
                      ) : (
                        <Image
                          src="/trend/downArrow.svg"
                          alt="downArrow"
                          width={14}
                          height={14}
                        />
                      )}
                      {item.count}
                    </Count>
                  </Slide>
                ))}
              </SlideBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </>
  );
};

export default RelatedRankChange;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.grey5};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 0.78rem;
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 0.78rem;
`;

const SlideBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding-right: 1rem;
`;

const Slide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Id = styled.div`
  font-weight: 700;
`;

const Title = styled.div`
  width: 100%;
`;

const Count = styled.div<{ updown: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  background: ${({ updown, theme }) =>
    updown ? theme.colors.secondary : theme.colors.grey0};
  border-radius: 100px;
  padding: 0.1rem 0.8rem;
`;
