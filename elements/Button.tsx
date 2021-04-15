import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  disabled?: boolean;
  className?: string;
  border?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  disabled = false,
  border = false,
  className,
}) => {
  return (
    <Container disabled={disabled} className={className} border={border}>
      {label}
    </Container>
  );
};
export default Button;

const Container = styled.button<{ border: boolean }>`
  background-color: ${({ border }) =>
    border ? "white" : "var(--primary-color-dark)"};
  border: ${({ border }) =>
    border ? "2px solid var(--primary-color-dark)" : "none"};
  color: ${({ border }) => (border ? "var( --text-color-dark)" : "white")};
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-transform: uppercase;
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
  }
`;
