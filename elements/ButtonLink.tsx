import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  disabled?: boolean;
  className?: string;
  border?: boolean;
  to: string;
}

const ButtonLink: React.FC<Props> = ({
  label,
  border = false,
  className,
  to,
}) => {
  return (
    <Link href={to}>
      <Container className={className} border={border}>
        {label}
      </Container>
    </Link>
  );
};
export default ButtonLink;

const Container = styled.div<{ border: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ border }) =>
    border ? "white" : "var(--primary-color-dark)"};
  border: ${({ border }) =>
    border ? "2px solid var(--primary-color-dark)" : "none"};
  color: ${({ border }) => (border ? "var( --text-color-dark)" : "white")};
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 183px;
  height: 54px;
  // font
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  &:hover {
    background-color: ${({ border }) =>
      border ? "var(--primary-color-dark)" : "var(--primary-color-darker)"};
    color: white;
    cursor: pointer;
  }
  a {
    &:hover {
      color: white !important;
    }
  }
`;
