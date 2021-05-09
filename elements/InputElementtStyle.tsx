import { css } from "styled-components";

const inputElementStyles = css<{ hasError?: boolean }>`
  width: 100%;
  height: 47px;
  max-width: 100%;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  appearance: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: var(--text-color-normal);
  border-color: ${({ hasError }) =>
    hasError ? "red" : "var(--border-color-dark)"};
  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: var(--text-color-normal);
  }
  &:focus {
    outline: none !important;
    border: 4px solid var(--border-color-dark);
  }
`;

export default inputElementStyles;
