"use client";

import styled from "styled-components";
import Category from "./Category";
import CopyMaker from "./CopyMaker";
import CopyResult from "./CopyResult";
import { useState } from "react";

const AdCopyPage = async () => {
  const [creating, setCreating] = useState<boolean>(false);
  return (
    <Layout>
      <Category />
      <CopyContent>
        <CopyMaker submitFunction={setCreating} refreshOption={creating} />
        <CopyResult refreshOption={creating} />
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
