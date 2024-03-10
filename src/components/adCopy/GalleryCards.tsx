import { recentSavedCopy } from "@/lib/action";
import { toneENUM, toneOption } from "@/lib/data";
import { colors } from "@/styles/theme";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface CopyItem {
  advertisementCopyId: number;
  service: string;
  tone: string;
  message: string;
}

const GalleryCards = () => {
  const [copy, setCopy] = useState<CopyItem[]>([]);

  useEffect(() => {
    recentSavedCopy().then((result) => {
      setCopy(result);
    });
  }, []);

  return (
    <Layout length={copy.length}>
      <BoxContents length={copy.length}>
        {copy.map((v, i) => (
          <CopyWrapper key={i} length={copy.length}>
            <TagBox>
              <Tag
                color={v.service == "HEAD" ? colors.main : colors.secondary}
                background={
                  v.service == "HEAD"
                    ? colors.mainLight6
                    : colors.secondaryLight3
                }
              >
                {v.service == "HEAD" ? "헤드카피" : "바디카피"}
              </Tag>
              <Tag color={colors.grey1} background={colors.grey5}>
                {toneOption[toneENUM.indexOf(v.tone)]}
              </Tag>
            </TagBox>
            {v.message}
            <EditWrapper>{`조회 5`}</EditWrapper>
          </CopyWrapper>
        ))}
      </BoxContents>
    </Layout>
  );
};

export default GalleryCards;

const Layout = styled.div<{ length: number }>`
  width: 77.825rem;
  justify-content: center;
  padding-right: ${(props) => (props.length > 6 ? "0.875rem" : "0")};
`;
const BoxContents = styled.div<{ length: number }>`
  width: 77.875rem;
  height: ${(props) => (props.length > 6 ? "43rem" : "33rem")};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-content: flex-start;
  overflow-y: auto;
  margin-top: 1.5rem;

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
const CopyWrapper = styled.div<{ length: number }>`
  display: flex;
  width: 25.5rem;
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
  //margin-right: 0.5rem;
`;
const TagBox = styled.div`
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
const EditWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: end;
  gap: 0.62rem;
  color: #cecece;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0075rem;
`;
