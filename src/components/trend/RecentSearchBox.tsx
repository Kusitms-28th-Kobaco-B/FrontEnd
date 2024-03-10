import { styled } from "styled-components";
import RecentSearchContent from "./RecentSearchContent";

interface RecentSearchBoxProps {
  data: string[];
}

const RecentSearchBox = (props: RecentSearchBoxProps) => {
  const { data } = props;

  return (
    <RecentSearchBoxStyle>
      {data.map((recentSearch: string) => (
        <RecentSearchContent name={recentSearch} />
      ))}
    </RecentSearchBoxStyle>
  );
};

export default RecentSearchBox;

const RecentSearchBoxStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  margin: 1rem 0 8rem 0;
`;
