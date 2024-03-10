"use client";

import { useState } from "react";
import AdCopySearch from "./AdCopySearch";
import styled from "styled-components";
import GalleryTag from "./GalleryTag";
import GalleryCards from "./GalleryCards";
import Link from "next/link";
import { Button } from "../common/ButtonStyle";
import { colors } from "@/styles/theme";
import Image from "next/image";

const CopyGalleryPage = async () => {
  const [searchName, setSearchName] = useState("");

  return (
    <Layout>
      <AdCopySearch setSearchName={setSearchName} />
      <GalleryTag />
      <GalleryCards />
      <Link href="/adCopy/createAdCopy">
        <Button
          background={colors.main}
          text={colors.white}
          style={{ marginTop: "5rem", marginBottom: "13rem", gap: "0.25rem" }}
        >
          새 카피 만들기
          <Image
            src={"/main/arrow-right.svg"}
            alt="right-arrow"
            width={18}
            height={18}
          />
        </Button>
      </Link>
    </Layout>
  );
};

export default CopyGalleryPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10.5rem;
`;
