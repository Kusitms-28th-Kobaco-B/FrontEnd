import { styled } from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/theme";

interface RelatedContentProps {
  title: string;
  subtitle: string;
  src: string;
  date: string;
  img: string;
}

const RelatedContent = (props: RelatedContentProps) => {
  const { title, subtitle, src, date, img } = props;

  return (
    <Layout>
      <TopBox>
        <Image src={img} alt="content" width={100} height={100} />
      </TopBox>
      <BottomBox>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <DescriptionBox>
          <SrcButton src={src}>{src}</SrcButton>
          <DateText>{date}</DateText>
        </DescriptionBox>
      </BottomBox>
    </Layout>
  );
};

export default RelatedContent;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14px 14px 0 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BottomBox = styled.div`
  background: #252525;
  border-radius: 0 0 14px 14px;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
  color: ${colors.grey3};
`;
const Subtitle = styled.div`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
  color: ${colors.grey1};
`;
const DescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const SrcButton = styled.button<{ src: string }>`
  padding: 0.5rem 0.8rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  background: ${(props) =>
    props.src == "유튜브"
      ? colors.main
      : props.src == "네이버 기사"
        ? "#73B65A"
        : colors.grey1};
  color: ${({ theme }) => theme.colors.white};
`;

const DateText = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
