import { colors } from "@/styles/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled(motion.button)<{
  background: string;
  text: string;
}>`
  display: inline-flex;
  padding: 0.75rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 2.1875rem;
  border: 1px solid ${colors.main};
  background: ${(props) => props.background};
  color: ${(props) => props.text};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
