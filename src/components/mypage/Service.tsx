import { colors } from "@/styles/theme";
import { styled } from "styled-components";

interface ServiceProps {
  button1: string;
  button2: string;
  content: string;
}

const Service = (props: ServiceProps) => {
  const { button1, button2, content } = props;

  return (
    <CopyWrapper>
      <TagWrapper>
        <Tag
          color={button1 == "헤드카피" ? colors.main : colors.secondary}
          background={
            button1 == "헤드카피" ? colors.mainLight6 : colors.secondaryLight3
          }
        >
          {button1}
        </Tag>
        <Tag color={colors.grey1} background={colors.grey5}>
          {button2}
        </Tag>
      </TagWrapper>
      {content}
    </CopyWrapper>
  );
};

export default Service;

const CopyWrapper = styled.div`
  position: relative;
  display: flex;
  width: 49%;
  height: 13rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.875rem;
  background: ${colors.grey0};
  color: ${colors.white};
  text-align: center;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 1rem;
`;
const TagWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: inline-flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  z-index: 1;
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
