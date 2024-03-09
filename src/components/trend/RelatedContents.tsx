import { styled } from "styled-components";
import RelatedContent from "./RelatedContent";

interface RelatedContentProps {
  data: {
    title: string;
    src: string;
    date: string;
  }[];
}

const RelatedContents = (props: RelatedContentProps) => {
  const { data } = props;

  return (
    <RelatedContentBox>
      {data.map((relatedContent) => (
        <RelatedContent
          title={relatedContent.title}
          src={relatedContent.src}
          date={relatedContent.date}
        />
      ))}
    </RelatedContentBox>
  );
};

export default RelatedContents;

const RelatedContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
