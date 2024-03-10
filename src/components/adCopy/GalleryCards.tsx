import { colors } from "@/styles/theme";
import styled from "styled-components";

const GalleryCards = () => {
  const data = [
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게2",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게3",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게4",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게5",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게6",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게3",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게4",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게5",
    },
    {
      advertisementCopyId: 0,
      service: "헤드카피",
      tone: "언어유희형",
      message: "내가 사는 지역을 더 살기 좋게, 더 매력 있게6",
    },
  ];

  return (
    <BoxContents>
      {data.map((v, i) => (
        <CopyWrapper key={i}>
          <TagBox>
            <Tag color={colors.main} background={colors.mainLight6}>
              {v.service}
            </Tag>
            <Tag color={colors.grey1} background={colors.grey5}>
              {v.tone}
            </Tag>
          </TagBox>
          {v.message}
          <EditWrapper>조회 1900</EditWrapper>
        </CopyWrapper>
      ))}
    </BoxContents>
  );
};

export default GalleryCards;

const BoxContents = styled.div`
  width: 87.825rem;
  height: 43rem;
  display: inline-flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-right: 0.875rem;

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
const CopyWrapper = styled.div`
  display: flex;
  width: 28.5rem;
  height: 14.375rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.875rem;
  background: ${colors.grey0};
  padding: 1rem;
  color: ${colors.white};
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 2%;
`;
const TagBox = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
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
const EditWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: end;
  gap: 0.62rem;
  margin-top: 2.75rem;
  color: #cecece;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;
