import { styled } from "styled-components";
import RecentSearchContent from "./RecentSearchContent";

interface RecentSearchBoxProps {
  data: {
    id: number;
    name: string;
  }[];
}

const RecentSearchBox = (props: RecentSearchBoxProps) => {
  const { data } = props;

  return (
    <RecentSearchBoxStyle>
      {data.map((recentSearch) => (
        <RecentSearchContent key={recentSearch.id} name={recentSearch.name} />
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
  margin-top: 1rem;
`;
