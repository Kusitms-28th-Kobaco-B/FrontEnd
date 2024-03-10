import { styled } from "styled-components";
import RelatedContent from "./RelatedContent";

interface RelatedContentProps {
  data: {
    title: string;
    subtitle: string;
    src: string;
    date: string;
    img: string;
  }[];
}

const RelatedContents = (props: RelatedContentProps) => {
  const { data } = props;

  return (
    <RelatedContentBox>
      {data.map((relatedContent) => (
        <RelatedContent
          title={relatedContent.title}
          subtitle={relatedContent.subtitle}
          src={relatedContent.src}
          date={relatedContent.date}
          img={relatedContent.img}
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
