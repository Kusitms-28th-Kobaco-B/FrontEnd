import { colors } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

const data = [
  {
    img: "/trend/shoppingSample1.png",
    title: "맥세이프 충전기",
    price: 13900,
    purchase: 62,
    review: 63,
    heart: 100,
  },
  {
    img: "/trend/shoppingSample2.png",
    title: "포램 맥세이프 2in1 휴대폰 자석 거치대",
    price: 16000,
    purchase: 30,
    review: 9,
    heart: 10,
  },
  {
    img: "/trend/shoppingSample3.png",
    title: "맥세이프 휴대폰 자석 거치대",
    price: 12900,
    purchase: 100,
    review: 8,
    heart: 20,
  },
  {
    img: "/trend/shoppingSample1.png",
    title: "맥세이프 충전기",
    price: 13900,
    purchase: 62,
    review: 63,
    heart: 100,
  },
  {
    img: "/trend/shoppingSample2.png",
    title: "포램 맥세이프 2in1 휴대폰 자석 거치대",
    price: 16000,
    purchase: 30,
    review: 9,
    heart: 10,
  },
  {
    img: "/trend/shoppingSample3.png",
    title: "맥세이프 휴대폰 자석 거치대",
    price: 12900,
    purchase: 100,
    review: 8,
    heart: 20,
  },
];

const ShoppingList = () => {
  return (
    <BoxContents>
      {data.map((v, i) => (
        <InlineContent key={i}>
          <Image
            src={v.img}
            alt={`shoppingItem-${i}`}
            width={130}
            height={130}
          />
          <TextWrapper>
            <BoldText>{v.title}</BoldText>
            <InlineContent>
              <BoldText>{v.price}</BoldText>원
            </InlineContent>
            <InlineContent>
              <Tag>구매 {v.purchase}</Tag>
              <Tag>리뷰 {v.review}</Tag>
              <Tag>찜 {v.heart}</Tag>
            </InlineContent>
          </TextWrapper>
        </InlineContent>
      ))}
    </BoxContents>
  );
};

export default ShoppingList;

const BoxContents = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-left: 5.25rem;
  padding-right: 0.875rem;
  gap: 1.5rem;

  &::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 10px;
    background-color: ${colors.grey0};
  }
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.main};
  }
`;
const InlineContent = styled.div`
  display: inline-flex;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${colors.grey4};
  gap: 0.5rem;
`;
const BoldText = styled.span`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  color: ${colors.grey4};
`;
const Tag = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.1875rem;
  border-radius: 6.25rem;
  background: ${colors.grey0};
  margin-right: 0.62rem;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${colors.grey4};
`;
