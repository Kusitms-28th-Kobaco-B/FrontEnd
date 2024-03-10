"use client";

import styled from "styled-components";
import Category from "./Category";
import CopyMaker from "./CopyMaker";
import CopyResult from "./CopyResult";

const AdCopyPage = async () => {
  return (
    <Layout>
      <Category />
      <CopyContent>
        <CopyMaker />
        <CopyResult />
      </CopyContent>
    </Layout>
  );
};

export default AdCopyPage;

const Layout = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  padding: 5.5rem 6% 0 6%;
`;
const CopyContent = styled.div`
  display: inline-flex;
  width: 100%;
`;
