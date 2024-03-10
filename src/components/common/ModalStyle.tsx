import { motion } from "framer-motion";
import styled from "styled-components";

// 모달 창 뒷배경
export const SearchModalBox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

// 모달 스타일
export const SearchModalContent = styled(motion.div)<{
  width: string;
  height: string;
}>`
  padding: 1.62rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: 0;
  border-radius: 0.875rem;
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;
