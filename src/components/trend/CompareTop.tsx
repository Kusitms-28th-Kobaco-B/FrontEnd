import { useEffect, useState } from "react";
import { styled } from "styled-components";

interface CompareTopProps {
  item1?: string;
  item2?: string;
  item3?: string;
}

const CompareTop = (props: CompareTopProps) => {
  const { item1, item2, item3 } = props;

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  useEffect(() => {
    if (item1) {
      setOne(true);
    }
    if (item2) {
      setTwo(true);
    }
    if (item3) {
      setThree(true);
    }
  }, [item1, item2, item3]);

  return (
    <Layout>
      <Button color={one}>{item1 ? item1 : "선택"}</Button>
      <div>VS</div>
      <Button color={two}>{item2 ? item2 : "선택"}</Button>
      <div>VS</div>
      <Button color={three}>{item3 ? item3 : "선택"}</Button>
    </Layout>
  );
};

export default CompareTop;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 2rem 0 8rem 0;
  div {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Button = styled.button<{ color: boolean }>`
  border-radius: 100px;
  padding: 0.7rem 3.5rem;
  white-space: nowrap;
  background: ${({ color, theme }) => (color ? theme.colors.main : "#393939")};
  cursor: pointer;
  color: ${({ color, theme }) =>
    color ? theme.colors.white : theme.colors.grey1};
  border: none;
`;
