"use client";

import { useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";

const MyIndex = () => {
  const [selected, setSelected] = useState(1);

  return (
    <Layout>
      <IndexBox>
        <Index selected={selected === 1} onClick={() => setSelected(1)}>
          마이 카피
        </Index>
        <Index selected={selected === 2} onClick={() => setSelected(2)}>
          마이 스토리보드
        </Index>
      </IndexBox>
      <Image src="/user/user.svg" alt="user" width={30} height={30} />
    </Layout>
  );
};

export default MyIndex;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
`;

const IndexBox = styled.div`
  display: flex;
  text-align: center;
  cursor: pointer;
`;

const Index = styled.div<{ selected: boolean }>`
  width: 10rem;
  padding: 0.7rem 0;
  border-bottom: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.main : theme.colors.grey1};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.grey1};
  white-space: nowrap;
`;
