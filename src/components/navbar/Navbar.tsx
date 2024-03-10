"use client";

import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { subtitleData, titleData } from "@/lib/navbar/navbarData";
import NOSSR from "../common/NOSSR";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { NavbarVariants } from "@/styles/animation";
import { isLoggedInState } from "@/context/recoilContext";
import { useRecoilState } from "recoil";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [openNavbar, setOpenNavbar] = useState(false);
  const router = useRouter();

  const handleNavbarClick = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleIndexClick = (titleIndex: number, subtitleIndex: number) => {
    setOpenNavbar(false);

    switch (titleIndex) {
      case 1:
        switch (subtitleIndex) {
          case 0:
            router.push("/trend/people");
            break;
          case 1:
            router.push("/trend/item");
            break;
          case 2:
            router.push("/trend/compare");
            break;
          default:
            break;
        }
        break;
      case 2:
        switch (subtitleIndex) {
          case 0:
            router.push("/adCopy/createAdCopy");
            break;
          case 1:
            router.push("/adCopy/copyGallery");
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest("#indexBox") && openNavbar) {
      setOpenNavbar(false);
    }
  };

  useEffect(() => {
    if (openNavbar) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openNavbar]);

  return (
    <>
      <NOSSR>
        <Layout onClick={(e) => e.stopPropagation()}>
          <LogoBox>
            <Logo
              src={"/navbar/kobaco_logo.svg"}
              alt={"kobaco"}
              onClick={() => {
                setOpenNavbar(false);
                router.push("/");
              }}
            />
          </LogoBox>

          <TitleBox onClick={handleNavbarClick}>
            {titleData.map((title: string, index: number) => {
              return <Title key={index}>{title}</Title>;
            })}
          </TitleBox>
          {isLoggedIn ? (
            <AuthBox>
              <div onClick={() => setIsLoggedIn(false)}>로그아웃</div>
              <div>|</div>
              <Link href="/user">
                <div>마이페이지</div>
              </Link>
            </AuthBox>
          ) : (
            <AuthBox>
              <div onClick={() => setIsLoggedIn(true)}>로그인</div>
              <div>|</div>
              <div>회원가입</div>
            </AuthBox>
          )}

          {openNavbar && (
            <IndexBox
              initial="offscreen"
              whileInView="onscreen"
              variants={NavbarVariants}
            >
              {subtitleData.map((title: string[], index: number) => (
                <SubtitleBox key={index}>
                  {title.map((subtitle: string, subIndex: number) => {
                    return (
                      <Title
                        key={subtitle}
                        onClick={() => handleIndexClick(index, subIndex)}
                      >
                        {subtitle}
                      </Title>
                    );
                  })}
                </SubtitleBox>
              ))}
            </IndexBox>
          )}
        </Layout>
      </NOSSR>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 5.5rem;
  padding: 0 5%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const LogoBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  width: 60%;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.mainLight1};
    transition: 0.1s;
  }
`;

const AuthBox = styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  white-space: nowrap;
  div {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.8rem;
  }
`;

const IndexBox = styled(motion.div)`
  width: 76%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(26, 26, 26, 0.4);
  backdrop-filter: blur(25px);
  border: 1px solid #333;
  border-radius: 20px;
  margin: 0 auto;
  padding: 0 7rem;
  position: fixed;
  top: 5.5rem;
  left: 0;
  right: 0;
`;

const SubtitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  cursor: pointer;
  gap: 2rem;
  padding: 2rem 0;
`;
