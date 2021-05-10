import React, { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  endIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
  border?: boolean;
  style?: CSSObject;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  label,
  disabled = false,
  border = false,
  className,
  style,
  type,
  onClick,
}) => {
  return (
    <Container
      disabled={disabled}
      style={style}
      border={border}
      className={className}
      onClick={onClick}
      type={type || "button"}
    >
      {label}
    </Container>
  );
};
export default Button;

const Container = styled.button<{ border: boolean }>`
  background-color: ${({ border, disabled }) => {
    if (border) return "white";
    return disabled ? "var(--color-border-gray)" : "var(--primary-color-dark)";
  }};

  border: ${({ border }) =>
    border ? "2px solid var(--primary-color-dark)" : "none"};
  color: ${({ border }) => (border ? "var(--primary-color-dark)" : "white")};
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
    cursor: pointer;
    background-color: ${({ border }) =>
      border ? "var(--primary-color-dark)" : "var(--primary-color-darker)"};
      background-color: ${({ disabled }) =>
        disabled && "var(--color-border-gray)"};
    color: white;
      
    color: white;
  }
  }
`;
